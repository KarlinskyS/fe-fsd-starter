import type { ReactNode } from 'react';

import { BackdropProvider } from './BackdropProvider';
import { ThemeProvider } from './ThemeProvider';
import { TranslationProvider } from './TranslationProvider';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <TranslationProvider>
      <ThemeProvider>
        <BackdropProvider>{children}</BackdropProvider>
      </ThemeProvider>
    </TranslationProvider>
  );
};
