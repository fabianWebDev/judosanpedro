import { es } from "./es";
import { en } from "./en";

export const i18n = { es, en };

export type Locale = keyof typeof i18n;

export const locales: Locale[] = ["es", "en"];