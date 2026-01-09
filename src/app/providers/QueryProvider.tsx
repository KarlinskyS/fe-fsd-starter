import { QueryClient, QueryClientProvider, type DefaultOptions } from '@tanstack/react-query';
import type { FC, ReactNode } from 'react';

const queryClient = new QueryClient({});

interface QueryProviderProps {
  queryClientOptions?: DefaultOptions;
  children: ReactNode;
}

export const QueryProvider: FC<QueryProviderProps> = ({ children, queryClientOptions = {} }) => {
  queryClient.setDefaultOptions(queryClientOptions);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
