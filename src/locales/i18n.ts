import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./en.json";
import thTranslation from "./th.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    th: { translation: thTranslation },
  },
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already escapes dynamic values
  },
});

export default i18n;
