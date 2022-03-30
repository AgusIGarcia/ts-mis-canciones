import "react-i18next";
import global from "./core/i18n/translations/en.json";
import songs from "./features/songs/delivery/i18n/en.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "global";
    resources: {
      global: typeof global;
      songs: typeof songs;
    };
  }
}
