export enum PriceType {
  live = 'Live Price',
  exchanged = 'Exchanged',
}

export interface Rate {
  dateTime: Date;
  currencyFrom: string;
  amount1: number;
  currencyTo: string;
  amount2: number;
  type: PriceType;
}
