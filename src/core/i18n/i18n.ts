import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import globalEn from "./translations/en.json";
import globalEs from "./translations/es.json";
import songsEn from "../../features/songs/delivery/i18n/en.json";
import songsEs from "../../features/songs/delivery/i18n/es.json";
import { Language } from "./Language";

const resources = {
  en: {
    global: globalEn,
    songs: songsEn,
  },
  es: {
    global: globalEs,
    songs: songsEs,
  },
};

const availableLanguages: Language[] = [
  { id: "en", name: "English" },
  { id: "es", name: "Spanish" },
];

const defaultLanguage = "en";

const defaultNS = "global";

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["global", "songs"],
  defaultNS: defaultNS,
  resources: resources,
});

export { i18n, availableLanguages, defaultLanguage };
