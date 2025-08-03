import { Outlet } from 'react-router';
import { InitialFeature } from '@features/initialFeature';
import { Box } from '@shared/ui';

export const Layout = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflowY: 'hidden',
      }}
    >
      <InitialFeature />
      <Outlet />
    </Box>
  );
};
