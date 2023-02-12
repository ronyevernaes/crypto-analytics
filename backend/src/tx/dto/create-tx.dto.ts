export class CreateTxDto {
  id: number;
  dateTime: Date;
  fromCurrency: string;
  amount1: number;
  toCurrency: string;
  amount2: number;
  type: string;
}
