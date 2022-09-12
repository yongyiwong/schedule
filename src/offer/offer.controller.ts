import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { OfferService } from './offer.service';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post('create')
  async create(): Promise<boolean> {
    return this.offerService.mock();
  }
}
