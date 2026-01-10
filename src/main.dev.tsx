import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { worker } from '@shared/config/msw';
import { App } from './app';

const startMockServiceWorker = async () => {
  await worker.start({
    onUnhandledRequest: 'error',
    quiet: false,
    serviceWorker: {
      // url: '/mockServiceWorker.js',
      options: {
        scope: '/',
      },
    },
  });
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

void startMockServiceWorker().then(() => {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
