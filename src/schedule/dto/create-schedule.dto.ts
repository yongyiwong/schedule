import { IsString, IsInt, IsNotEmpty, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateScheduleDto {
  
  @IsString()
  @IsNotEmpty()
  readonly scheduleTitle: string;

  readonly scheduleId: number;

  @IsString()
  readonly scheduleDescription: string;

  @IsDate()
  @Type(() => Date)
  readonly scheduleDate: string;  
}