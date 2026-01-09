import { Outlet } from '@tanstack/react-router';
import { InitialFeature } from '@features/initialFeature';
import { LanguageSwitcher } from '@features/languageSwitcher';
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
      <LanguageSwitcher />
      <InitialFeature />
      <Outlet />
    </Box>
  );
};
