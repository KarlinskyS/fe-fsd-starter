import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { defaultLocale, locales, STORED_LOCALE, type LocaleKey } from '@shared/config';
import { createTranslator, getDirection, persistLocale, readStoredLocale, TranslationContext } from '@shared/lib';
import { useEffect, useMemo, useState } from 'react';

const rtlCache = createCache({ key: 'mui-rtl', stylisPlugins: [rtlPlugin] });
const ltrCache = createCache({ key: 'mui' });

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<LocaleKey>(() =>
    readStoredLocale(STORED_LOCALE, defaultLocale),
  );

  const direction = useMemo(() => getDirection(locale), [locale]);
  const t = useMemo(() => createTranslator(locale, defaultLocale, locales), [locale]);
  const cache = direction === 'rtl' ? rtlCache : ltrCache;

  useEffect(() => {
    persistLocale(STORED_LOCALE, locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [locale, direction]);

  const value = useMemo(
    () => ({
      locale,
      direction,
      setLocale,
      t,
    }),
    [locale, direction, t],
  );

  return (
    <TranslationContext.Provider value={value}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </TranslationContext.Provider>
  );
};
