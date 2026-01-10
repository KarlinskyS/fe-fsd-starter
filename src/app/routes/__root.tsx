import { createRootRoute } from '@tanstack/react-router';
import { Layout } from '@pages/layout';
import { NotFoundPage } from '@pages/notFound';
import { ErrorPage } from '@pages/error';
import { PageLoader } from '@shared/ui';

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage,
  pendingComponent: PageLoader,
});
