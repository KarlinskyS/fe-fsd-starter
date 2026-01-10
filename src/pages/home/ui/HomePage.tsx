import { Link } from '@tanstack/react-router';
import { routePaths } from '@shared/config';
import { Box, Button, Typography } from '@shared/ui';
import { ThemeSwitcherToggle } from '@features/themeSwitcher';

export const HomePage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">Home</Typography>
      <Box sx={{ marginTop: 2 }}>
        <ThemeSwitcherToggle />
      </Box>
      <Typography sx={{ marginTop: 1, marginBottom: 2 }}>
        Test page A
      </Typography>
      <Button component={Link} to={routePaths.second} variant="contained">
        Go to second page
      </Button>
    </Box>
  );
};
