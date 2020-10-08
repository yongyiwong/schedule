import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { ScheduleEntity } from './schedule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ScheduleEntity])],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}