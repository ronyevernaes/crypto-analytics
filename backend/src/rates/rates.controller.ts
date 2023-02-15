import { Controller, Get, Post, Body } from '@nestjs/common';

import { RatesService } from './rates.service';
import { RatesGateway } from './rates.gateway';
import { CreateRateDto } from './dto/create-rate.dto';

@Controller('rates')
export class RatesController {
  constructor(
    private readonly ratesService: RatesService,
    private readonly ratesGateway: RatesGateway,
  ) {}

  @Post()
  async create(@Body() createRateDto: CreateRateDto) {
    const newRate = await this.ratesService.create(createRateDto);
    this.ratesGateway.handleNewRate(newRate);
    return newRate;
  }

  @Get()
  findAll() {
    return this.ratesService.findAll();
  }
}
