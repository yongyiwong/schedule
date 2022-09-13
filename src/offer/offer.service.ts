import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from './offer.entity';
import { Repository } from 'typeorm';
import { OfferType } from './offer.type';
import { Offer1Result } from './offer1/dto/offer1.result';
import { Offer1payload } from './offer1/offer1.payload';

import { Offer2Result } from './offer2/dto/offer2.result';
import { Offer2Payload } from './offer2/offer2.payload';
import { Offer2ResponseParams } from './offer2/dto/offer2.response.params';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepository: Repository<Offer>,
  ) {}

  create(offerParams: OfferType): Promise<Offer> {
    const offer = new Offer();
    offer.name = offerParams.name;
    offer.description = offerParams.description;
    offer.slug = offerParams.slug;
    return this.offerRepository.save(offer);
  }

  // TODO: this must be implemented by abstract class

  async mock() {
    let offerParams: OfferType[] = [];

    try {
      offerParams = offerParams.concat(
        Offer1Result.responseFactory(Offer1payload),
      );

      offerParams = offerParams.concat(
        Offer2Result.responseFactory(Offer2Payload as Offer2ResponseParams),
      );

      await Promise.all(
        offerParams.map(async offerParam => {
          console.log('Mock data here XXXX', offerParams);

          await this.create(offerParam);
        }),
      );

      return true;
    } catch (e) {
      console.log('Mock failed', e);
      return false;
    }
  }
}
