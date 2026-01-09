import { en } from './locales/en';
import { ru } from './locales/ru';
import { he } from './locales/he';
import { ar } from './locales/ar';

type TranslationShape = typeof en;
export type Translations = {
  [Group in keyof TranslationShape]: {
    [Key in keyof TranslationShape[Group]]: string;
  };
};

export const locales = {
  en,
  ru,
  he,
  ar,
} as const satisfies Record<string, Translations>;

export const defaultLocale = 'en' as const;
export const STORED_LOCALE = `${import.meta.env.VITE_APP_TITLE}_locale`;

export type LocaleKey = keyof typeof locales;

type TranslationGroup = keyof Translations & string;
export type TranslationKey = {
  [K in TranslationGroup]: `${K}.${keyof Translations[K] & string}`;
}[TranslationGroup];
