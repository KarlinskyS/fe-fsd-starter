import type { ThemeMode } from './types';
import { isThemeMode } from './consts';

export const readStoredThemeMode = (storageKey: string, fallback: ThemeMode): ThemeMode => {
  if (typeof window === 'undefined') {
    return fallback;
  }

  try {
    const storedMode = window.localStorage.getItem(storageKey);
    return isThemeMode(storedMode) ? storedMode : fallback;
  } catch {
    return fallback;
  }
};

export const persistThemeMode = (storageKey: string, mode: ThemeMode): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(storageKey, mode);
  } catch {
    if (import.meta.env.DEV) {
      console.warn('Failed to persist theme mode in localStorage');
    }
  }
};
