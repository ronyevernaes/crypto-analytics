import { Test, TestingModule } from '@nestjs/testing';
import { RatesGateway } from './rates.gateway';

describe('RatesGateway', () => {
  let gateway: RatesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RatesGateway],
    }).compile();

    gateway = module.get<RatesGateway>(RatesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
