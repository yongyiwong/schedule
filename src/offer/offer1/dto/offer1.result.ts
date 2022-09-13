import { OfferResult } from 'src/offer/offer.result';
import { OfferType } from 'src/offer/offer.type';
import { Offer1ResponseParams } from './offer1.response.params';

export class Offer1Result implements OfferResult {
  responseFactory(offer1Params: Offer1ResponseParams): Array<OfferType> {
    const result: OfferType = new OfferType();

    const data = Object.values(offer1Params?.data)[0] || null;
    if (data) {
      result.name = data.Offer.name;
      result.slug = data.Offer.short_description;
      result.description = data.Offer.description;
      result.offerUrlTemplate = data.Offer.tracking_url;
      result.thumbnail = data.Offer.icon;
      result.isDesktop = data.OS.web ? 1 : 0;
      result.isAndroid = data.OS.android ? 1 : 0;
      result.isIos = data.OS.ios ? 1 : 0;
      result.requirements = data.Offer.instructions;

      return [result];
    }
    return null;
  }
}
