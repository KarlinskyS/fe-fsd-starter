import { Layout } from '@pages/layout';
import { BackdropProvider } from './providers';

export function App() {
  return (
    <BackdropProvider>
      <Layout />
    </BackdropProvider>
  );
}
