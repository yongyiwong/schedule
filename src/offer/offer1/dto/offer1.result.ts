import { OfferType } from 'src/offer/offer.type';
import { Offer1ResponseParams } from './offer1.response.params';

export class Offer1Result {
  static responseFactory(data: Offer1ResponseParams): Array<OfferType> {
    const result: OfferType = new OfferType();
    result.name = data.Offer.name;
    result.slug = data.Offer.short_description;
    result.description = data.Offer.description;
    return [result];
  }
}
