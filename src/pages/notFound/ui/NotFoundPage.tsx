import { Link } from '@tanstack/react-router';
import { Box, Button, Typography } from '@shared/ui';

export const NotFoundPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">Not Found</Typography>
      <Typography sx={{ marginTop: 1, marginBottom: 2 }}>
        The page does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained">
        Go to home
      </Button>
    </Box>
  );
};
