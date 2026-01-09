import { createContext } from 'react';
import type { LocaleKey, TranslationKey } from '@shared/config';

export type TranslationContextValue = {
  locale: LocaleKey;
  direction: 'ltr' | 'rtl';
  setLocale: (locale: LocaleKey) => void;
  t: (key: TranslationKey) => string;
};

export const TranslationContext = createContext<TranslationContextValue | null>(null);
