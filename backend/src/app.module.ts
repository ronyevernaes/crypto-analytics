import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import configuration from './config/configuration';
import { RatesModule } from './rates/rates.module';
import { Rate } from './rates/entities/rate.entity';
import { TxxModule } from './txx/txx.module';
import { ExchangeModule } from './exchange/exchange.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService) => ({
        type: 'mongodb',
        username: configService.get('database.user') as string,
        password: configService.get('database.password') as string,
        entities: [Rate],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    RatesModule,
    ExchangeModule,
    TxxModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
}
