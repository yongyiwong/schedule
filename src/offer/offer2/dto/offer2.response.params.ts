export class Offer2ResponseParams {
  query: {
    pubid: string;
    appid: number;
    country: string;
    platform: string;
  };
  response: {
    currency_name: string;
    offers_count: number;
    // this will be array of offers
    // this can be multiple, so please consider this
    offers: Array<{
      // should be mapped to `externalOfferId`
      offer_id: string;
      // should be mapped to `name`
      offer_name: string;
      // should be mapped to `description`
      offer_desc: string;
      // should be mapped to `requirements`
      call_to_action: string;
      disclaimer: string;
      // should be mapped to offerUrlTemplate
      offer_url: string;
      offer_url_easy: string;
      payout: number;
      payout_type: string;
      amount: number;
      // should be mapped to `thumbnail`
      image_url: string;
      image_url_220x124: string;
      countries: Array<string>;
      // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
      platform: string;
      device: string;
      category: any;
      last_modified: number;
      preview_url: string;
      package_id: string;
      verticals: Array<{
        vertical_id: string;
        vertical_name: string;
      }>;
    }>;
  };
}
