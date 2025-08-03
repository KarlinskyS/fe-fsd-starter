import { createContext } from 'react';
import type { AxiosInstance } from 'axios';

export const HttpClientContext = createContext<{ httpClient: AxiosInstance }>({
  httpClient: {} as AxiosInstance,
});
