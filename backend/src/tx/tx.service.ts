import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTxDto } from './dto/create-tx.dto';
import { Tx } from './entities/tx.entity';

@Injectable()
export class TxService {
  constructor(
    @InjectRepository(Tx)
    private txRepository: Repository<Tx>,
  ) {}

  create(createTxDto: CreateTxDto) {
    return this.txRepository.save(createTxDto);
  }

  findAll() {
    return this.txRepository.find();
  }
}
