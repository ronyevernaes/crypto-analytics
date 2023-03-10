import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import configuration from './config/configuration';
import { ExchangeModule } from './exchange/exchange.module';
import { Rate } from './rates/entities/rate.entity';
import { RatesModule } from './rates/rates.module';

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
        host: configService.get('database.host') as string,
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    RatesModule,
    ExchangeModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
}
