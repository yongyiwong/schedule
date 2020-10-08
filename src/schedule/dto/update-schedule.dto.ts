import { IsString, IsInt, IsNotEmpty, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateScheduleDto {
  
  @IsString()
  @IsNotEmpty()
  readonly scheduleTitle: string;

  @IsInt()
  @IsNotEmpty()  
  @Type(() => Number)  
  readonly scheduleId: number;

  @IsString()
  readonly scheduleDescription: string;

  @IsDate()
  @Type(() => Date)
  readonly scheduleDate: string;  
}