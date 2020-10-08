import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ScheduleModule} from './schedule/schedule.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(),ScheduleModule],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
