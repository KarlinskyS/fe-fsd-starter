import { Backdrop, CircularProgress } from '@mui/material';

export const BackdropProgress = ({ open, customMessage }: { open: boolean; customMessage?: React.ReactNode }) => (
  <Backdrop
    open={open}
    sx={{
      color: 'backdrop',
      zIndex: (theme) => (theme.zIndex.drawer | theme.zIndex.modal) + 1,
    }}
    unmountOnExit
  >
    {customMessage ? customMessage : <CircularProgress color="secondary" size={80} />}
  </Backdrop>
);
