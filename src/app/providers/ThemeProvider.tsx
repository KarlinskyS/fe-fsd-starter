import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { getDesignTokens, STORED_PALETTE_MODE } from '@shared/config';
import {
  DEFAULT_MODE,
  persistThemeMode,
  readStoredThemeMode,
  ThemeContext,
  useTranslation,
} from '@shared/lib';
import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { ThemeMode } from '@shared/lib';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() =>
    readStoredThemeMode(STORED_PALETTE_MODE, DEFAULT_MODE),
  );
  const { direction } = useTranslation();

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    persistThemeMode(STORED_PALETTE_MODE, mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        ...getDesignTokens(mode, direction),
      }),
    [mode, direction],
  );
  const themeValue = useMemo(
    () => ({
      mode,
      toggleTheme,
      theme,
    }),
    [mode, toggleTheme, theme],
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />

        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
