import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SchedulerRegistry, Timeout } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';

import { ExchangeAssetDto } from './dto/exchange-asset.dto';
import { RatesGateway } from 'src/rates/rates.gateway';
import { RatesService } from 'src/rates/rates.service';

@Injectable()
export class ExchangeService {
  private readonly logger = new Logger(ExchangeService.name);

  private readonly interval =
    this.configService.get<number>('exchange.interval') || 1;

  private readonly assets =
    this.configService.get<string>('exchange.assets') || 'bitcoin,ethereum';

  private readonly currencies =
    this.configService.get<string>('exchange.currencies') || 'USD';

  private readonly apiUrl = this.configService.get<string>('exchange.apiUrl');

  constructor(
    private readonly configService: ConfigService,
    private readonly schedulerRegistry: SchedulerRegistry,
    private readonly ratesService: RatesService,
    private readonly httpService: HttpService,
    private readonly ratesGateway: RatesGateway,
  ) {}

  @Timeout(0)
  initInterval(): void {
    this.logger.log('Initializing interval...');

    if (this.schedulerRegistry.doesExist('interval', 'exchange')) {
      clearInterval(this.schedulerRegistry.getInterval('exchange'));
    }

    this.getRates();

    this.schedulerRegistry.addInterval(
      'exchange',
      setInterval(() => this.getRates(), this.interval * 60000),
    );
  }

  getRates(): void {
    this.logger.debug(`Requesting to CoinGecko: ${this.assets}`);

    const assets = this.assets.split(',');
    const currencies = this.currencies.split(',');

    assets.forEach((asset) => {
      this.httpService.axiosRef
        .get(`${this.apiUrl}/coins/${asset}/tickers`)
        .then(async (response) => {
          const exchangeAsset = response.data as ExchangeAssetDto;
          const { tickers } = exchangeAsset;

          const selectedTicker = tickers.find((ticker) =>
            currencies.includes(ticker.target),
          );

          if (selectedTicker) {
            this.logger.debug(
              `Saving ${selectedTicker.base} at ${selectedTicker.timestamp}`,
            );

            const newRate = await this.ratesService.create({
              dateTime: new Date(selectedTicker.timestamp),
              currencyFrom: selectedTicker.base,
              amount1: 1,
              currencyTo: selectedTicker.target,
              amount2: selectedTicker.last,
              type: 'live',
            });

            this.ratesGateway.handleNewRate(newRate);
          } else {
            this.logger.warn(
              `Ticker not found for asset ${exchangeAsset.name}`,
            );
          }
        })
        .catch((error) => {
          this.logger.error(error);
        });
    });
  }
}
