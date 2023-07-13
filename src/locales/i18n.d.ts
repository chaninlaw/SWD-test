import enTranslation from "./en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaltNS: "en";
    resources: typeof enTranslation;
  }
}
