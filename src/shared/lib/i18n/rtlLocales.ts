import type { LocaleKey } from '@shared/config';

export const rtlLocales: LocaleKey[] = ['he', 'ar'];

export const getDirection = (locale: LocaleKey): 'ltr' | 'rtl' =>
  rtlLocales.includes(locale) ? 'rtl' : 'ltr';
