import type { ThemeMode } from './types';

export const DEFAULT_MODE: ThemeMode = 'light';

export const isThemeMode = (value: string | null): value is ThemeMode =>
  value === 'light' || value === 'dark';
