import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { RatesModule } from 'src/rates/rates.module';
import { ExchangeService } from './exchange.service';

@Module({
  imports: [HttpModule, RatesModule],
  providers: [ExchangeService, ConfigService],
})
export class ExchangeModule {}
