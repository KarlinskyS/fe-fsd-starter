import type { PaletteMode, Theme } from '@mui/material';

export type ThemeMode = PaletteMode;

export interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
  theme: Theme;
}
