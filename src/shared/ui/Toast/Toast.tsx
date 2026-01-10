import type { ReactNode, SyntheticEvent } from 'react';
import { Alert, Snackbar } from '@mui/material';
import type { AlertColor, SnackbarCloseReason, SnackbarOrigin } from '@mui/material';

const defaultPosition: SnackbarOrigin = { vertical: 'bottom', horizontal: 'center' };
const defaultAutoHideDuration = 5000;

interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  message?: ReactNode | null;
  severity?: AlertColor;
  position?: SnackbarOrigin;
  autoHideDuration?: number;
}

export const Toast = ({
  isOpen,
  onClose,
  message,
  severity = 'info',
  position = defaultPosition,
  autoHideDuration = defaultAutoHideDuration,
}: ToastProps) => {
  if (message == null) {
    return null;
  }

  const handleClose = (_event: Event | SyntheticEvent, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose();
  };

  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={position}
    >
      <Alert onClose={handleClose} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};
