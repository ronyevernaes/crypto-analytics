import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TxService } from './tx.service';
import { TxController } from './tx.controller';
import { Tx } from './entities/tx.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tx])],
  controllers: [TxController],
  providers: [TxService],
})
export class TxModule {}
