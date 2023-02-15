export class ExchangeAssetDto {
  name: string;
  tickers: [
    {
      base: string;
      target: string;
      market: {
        name: string;
        identifier: string;
        has_trading_incentive: boolean;
      };
      last: number;
      timestamp: string;
    },
  ];
}
