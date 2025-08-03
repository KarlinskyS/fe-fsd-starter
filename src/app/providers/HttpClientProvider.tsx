import { HttpClientContext } from '@shared/lib';
import type { AxiosInstance } from 'axios';
import { useMemo, type ReactNode } from 'react';

export const HttpClientProvider = ({ client, children }: { client: AxiosInstance; children: ReactNode }) => {
  if (!client) {
    throw new Error('HttpClient is not provided');
  }

  const value = useMemo(
    () => ({
      httpClient: client,
    }),
    [client],
  );

  return <HttpClientContext.Provider value={value}>{children}</HttpClientContext.Provider>;
};
