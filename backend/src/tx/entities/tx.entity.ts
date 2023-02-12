import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tx {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateTime: Date;

  @Column()
  fromCurrency: string;

  @Column()
  amount1: number;

  @Column()
  toCurrency: string;

  @Column()
  amount2: number;

  @Column()
  type: string;
}
