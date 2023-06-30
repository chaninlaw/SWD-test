import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import thTranslation from "./locales/th.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    th: { translation: thTranslation },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if the selected language is not available
  interpolation: {
    escapeValue: false, // React already escapes dynamic values
  },
});

export default i18n;
