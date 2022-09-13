import { platform } from 'os';
import { OfferType } from 'src/offer/offer.type';
import { Offer2ResponseParams } from './offer2.response.params';

export class Offer2Result {
  static responseFactory(data: Offer2ResponseParams): Array<OfferType> {
    const results = (data?.response?.offers || []).map(offer => {
      const result: OfferType = new OfferType();
      result.name = offer.offer_name;
      result.slug = offer.offer_desc;
      result.description = offer.offer_desc;

      result.externalOfferId = offer.offer_id;
      result.requirements = offer.call_to_action;
      result.offerUrlTemplate = offer.offer_url;
      result.thumbnail = offer.image_url;

      result.isDesktop = offer.platform !== 'mobile' ? 1 : 0;
      result.isAndroid =
        offer.platform === 'mobile' && offer.device !== 'iphone_ipad' ? 1 : 0;
      result.isIos =
        offer.platform === 'mobile' && offer.device === 'iphone_ipad' ? 1 : 0;
      return result;
    });

    return results || null;
  }
}
