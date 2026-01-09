import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeContext } from '@shared/lib';
import { useCallback, useEffect, useMemo, useState } from 'react';

const STORED_PALETTE_MODE = `${import.meta.env.VITE_APP_TITLE}_palette_mode`;

export const ThemeProvider = ({ theme, children }: { theme?: 'light' | 'dark'; children: React.ReactNode }) => {
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedMode = localStorage.getItem(STORED_PALETTE_MODE);
      return storedMode || 'light';
    }
    return 'light';
  });

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORED_PALETTE_MODE, mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const baseTheme = useMemo(
    () =>
      createTheme({
        ...getDesignTokens(mode),
      }),
    [mode],
  );
  const tempTheme = theme || baseTheme;
  const themeValue = useMemo(
    () => ({
      mode,
      toggleTheme,
      baseTheme: tempTheme,
    }),
    [mode, toggleTheme, tempTheme],
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <MuiThemeProvider theme={tempTheme}>
        <CssBaseline enableColorScheme />

        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
