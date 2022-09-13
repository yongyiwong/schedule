import { OfferType } from 'src/offer/offer.type';
import { Offer2ResponseParams } from './offer2.response.params';

export class Offer2Result {
  static responseFactory(data: Offer2ResponseParams): Array<OfferType> {
    const results = (data?.response?.offers || []).map(offer => {
      const result: OfferType = new OfferType();
      result.name = offer.offer_name;
      result.slug = offer.offer_desc;
      result.description = offer.offer_desc;
      return result;
    });

    return results || null;
  }
}
