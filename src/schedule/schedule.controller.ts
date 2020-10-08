import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import {CreateScheduleDto} from './dto/create-schedule.dto';
import { ScheduleService } from './schedule.service';
import {ValidationPipe} from '../validation.pipe';
import {ParseIntPipe} from '../parse-int.pipe';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { DeleteScheduleDto } from './dto/delete-schedule.dto';
import { ScheduleEntity } from './schedule.entity';
import { DeleteResult } from 'typeorm';

@Controller('schedule')
export class ScheduleController {
    
    constructor(private readonly scheduleService: ScheduleService ) {}

    @Get()
    findAll(): Promise<ScheduleEntity[]>{
        return this.scheduleService.findAll();
    }

    @Get('get/:id')
    findOne(@Param('id', new ParseIntPipe()) id):Promise<ScheduleEntity>{
        return this.scheduleService.findOne(id);
    }

    @Post('create')
    async create(@Body() scheduleDto: CreateScheduleDto):Promise<ScheduleEntity> {
      return this.scheduleService.create(scheduleDto);
    }

    @Post('update')
    async update(@Body() scheduleDto: UpdateScheduleDto):Promise<ScheduleEntity> {
      return this.scheduleService.update(scheduleDto);
    }

    @Post('delete')
    async delete(@Body() scheduleDto: DeleteScheduleDto):Promise<DeleteResult> {
      return this.scheduleService.delete(scheduleDto);
    }        
}