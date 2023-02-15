import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Rate {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  dateTime: Date;

  @Column()
  currencyFrom: string;

  @Column()
  amount1: number;

  @Column()
  currencyTo: string;

  @Column()
  amount2: number;

  @Column()
  type: string;
}
