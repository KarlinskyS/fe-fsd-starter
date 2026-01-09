import { locales, type LocaleKey } from '@shared/config';

const localeList = Object.keys(locales) as LocaleKey[];

export const isLocale = (value: string): value is LocaleKey =>
  localeList.includes(value as LocaleKey);
