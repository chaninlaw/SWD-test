export * as i18n from "./i18n";
import i18next from "i18next";

export const langs = [{ shortName: "en" }, { shortName: "th" }];

export type translateType = {
  trans: typeof i18next.t;
};
