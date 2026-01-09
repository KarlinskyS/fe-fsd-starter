import { RouterProvider } from '@tanstack/react-router';
import { router } from '@app/routing';
import { AppProviders } from './providers';

export function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}
