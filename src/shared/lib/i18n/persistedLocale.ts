import type { LocaleKey } from '@shared/config';
import { isLocale } from './isLocale';

export const readStoredLocale = (storageKey: string, fallback: LocaleKey): LocaleKey => {
  if (typeof window === 'undefined') {
    return fallback;
  }

  try {
    const storedLocale = window.localStorage.getItem(storageKey);
    return storedLocale && isLocale(storedLocale) ? storedLocale : fallback;
  } catch {
    return fallback;
  }
};

export const persistLocale = (storageKey: string, locale: LocaleKey): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(storageKey, locale);
  } catch {
    if (import.meta.env.DEV) {
      console.warn('Failed to persist locale in localStorage');
    }
  }
};
