import { CircularProgress } from '@mui/material';
import { Box } from '../Box';

export const PageLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
      }}
    >
      <CircularProgress color="secondary" size={64} />
    </Box>
  );
};
