import { FormControlLabel, Switch } from '@mui/material';
import { useTheme } from '@shared/lib';
import type { ReactElement } from 'react';

export const ThemeSwitcherToggle = (): ReactElement => {
  const { mode, toggleTheme } = useTheme();
  const isDark = mode === 'dark';

  return (
    <FormControlLabel
      control={<Switch checked={isDark} onChange={toggleTheme} color="primary" />}
      label="Dark mode"
    />
  );
};
