import { IsInt, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class DeleteScheduleDto {
  
  readonly scheduleDescription: string;  
  readonly scheduleTitle: string;
  readonly scheduleDate: string;   

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)  
  readonly scheduleId: number;
}