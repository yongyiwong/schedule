import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from './interfaces/schedule.interface';
import { DeleteResult, Repository } from 'typeorm';
import { ScheduleEntity } from './schedule.entity';
import * as moment from 'moment';
import * as numeral from 'numeral';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(ScheduleEntity)
    private readonly scheduleRepository: Repository<ScheduleEntity>,
  ) {}

  create(schedule: Schedule): Promise<ScheduleEntity> {
    const scheduleEntity = new ScheduleEntity();
    scheduleEntity.scheduleDate = moment(schedule.scheduleDate, 'MM/DD/YYYY').toDate();
    scheduleEntity.scheduleTitle = schedule.scheduleTitle;
    scheduleEntity.scheduleDescription = schedule.scheduleDescription;
    return this.scheduleRepository.save(scheduleEntity);
  }

  update(schedule: Schedule): Promise<ScheduleEntity> {
    const scheduleEntity = new ScheduleEntity();
    scheduleEntity.scheduleId = numeral(schedule.scheduleId).value();
    scheduleEntity.scheduleDate = moment(schedule.scheduleDate, 'MM/DD/YYYY').toDate();
    scheduleEntity.scheduleTitle = schedule.scheduleTitle;
    scheduleEntity.scheduleDescription = schedule.scheduleDescription;
    return this.scheduleRepository.save(scheduleEntity);
  }

  delete(schedule: Schedule): Promise<DeleteResult> {
    const id:number = schedule.scheduleId;
    return this.scheduleRepository.delete(id);
  }  

  findAll(): Promise<ScheduleEntity[]> {
    return this.scheduleRepository.find();
  }

  findOne(id: string): Promise<ScheduleEntity> {
    return this.scheduleRepository.findOne(id);
  }
}