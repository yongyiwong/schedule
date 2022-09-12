import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from './schedule/schedule.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferModule } from './offer/offer.module';
import { OfferService } from './offer/offer.service';
import { Offer } from './offer/offer.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), ScheduleModule, OfferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
