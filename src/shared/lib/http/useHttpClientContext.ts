import { useContext } from 'react';
import { HttpClientContext } from './HttpClientContext';

export function useHttpClientContext() {
  const context = useContext(HttpClientContext);

  if (!context) {
    throw new Error('useHttpClientContext must be used within a HttpClientProvider');
  }

  return context;
}
