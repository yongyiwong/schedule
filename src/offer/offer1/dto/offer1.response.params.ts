export class Offer1ResponseParams {
  status: string;
  data: {
    // offers from offer1 provider
    [key: string]: {
      Offer: {
        campaign_id: number;
        store_id: string;
        tracking_type: string;
        campaign_vertical: string;
        currency_name_singular: string;
        currency_name_plural: string;
        network_epc: string;
        // should be mapped to `icon`
        icon: string;
        // should be mapped to `name`
        name: string;
        // should be mapped to `offerUrlTemplate`
        tracking_url: string;
        // should be mapped to `requirements`
        instructions: string;
        disclaimer: string | null;
        // should be mapped to `description`
        description: string;
        short_description: string;
        offer_sticker_text_1: string;
        offer_sticker_text_2: string | null;
        offer_sticker_text_3: string | null;
        offer_sticker_color_1: string;
        offer_sticker_color_2: string;
        offer_sticker_color_3: string;
        sort_order_setting: string | null;
        category_1: string;
        category_2: string | null;
        amount: number;
        payout_usd: number;
        start_datetime: string;
        end_datetime: string;
        is_multi_reward: boolean;
      };
      Country: {
        include: {
          US: {
            id: number;
            code: string;
            name: string;
          };
        };
        exclude: Array<any>;
      };
      State: {
        include: Array<any>;
        exclude: Array<any>;
      };
      City: {
        include: Array<any>;
        exclude: Array<any>;
      };
      Connection_Type: {
        cellular: boolean;
        wifi: boolean;
      };
      Device: {
        include: Array<any>;
        exclude: Array<any>;
      };
      OS: {
        // this should be mapped to `isAndroid`
        android: boolean;
        // this should be mapped to `isIos`
        ios: boolean;
        // this should be mapped to `isDesktop`
        web: boolean;
        min_ios: string | null;
        max_ios: string | null;
        min_android: string | null;
        max_android: string | null;
      };
    };
  };
}
