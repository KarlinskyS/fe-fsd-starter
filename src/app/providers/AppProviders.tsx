import type { ReactNode } from 'react';
import { httpClient } from '@shared/lib';

import { BackdropProvider } from './BackdropProvider';
import { HttpClientProvider } from './HttpClientProvider';
import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';
import { TranslationProvider } from './TranslationProvider';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <TranslationProvider>
      <ThemeProvider>
        <HttpClientProvider client={httpClient}>
          <QueryProvider>
            <BackdropProvider>{children}</BackdropProvider>
          </QueryProvider>
        </HttpClientProvider>
      </ThemeProvider>
    </TranslationProvider>
  );
};
