import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/second')({
  component: lazyRouteComponent(() => import('@pages/second'), 'SecondPage'),
});
