import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity({name: "schedule"})
export class ScheduleEntity{
    
    @PrimaryColumn('integer') scheduleId: number
    @Column('date') scheduleDate: Date
    @Column('varchar', {length: 255}) scheduleTitle: string
    @Column('varchar', {length: 255}) scheduleDescription: string
}