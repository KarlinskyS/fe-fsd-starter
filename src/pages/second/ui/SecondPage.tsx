import { Link } from '@tanstack/react-router';
import { routePaths } from '@shared/config';
import { Box, Button, Typography } from '@shared/ui';

export const SecondPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">Second</Typography>
      <Typography sx={{ marginTop: 1, marginBottom: 2 }}>
        Test page B
      </Typography>
      <Button component={Link} to={routePaths.home} variant="outlined">
        Back to home
      </Button>
    </Box>
  );
};
