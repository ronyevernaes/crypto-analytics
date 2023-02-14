import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { TxModule } from './tx/tx.module';
import { Tx } from './tx/entities/tx.entity';

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
        entities: [Tx],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    TxModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
}
