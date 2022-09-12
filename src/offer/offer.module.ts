import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { Offer } from './offer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferController } from './offer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Offer])],
  controllers: [OfferController],
  providers: [OfferService],
})
export class OfferModule {}
