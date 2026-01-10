import type { Dispatch, ReactNode } from 'react';
import type { AlertColor, SnackbarOrigin } from '@mui/material';

export type ToastPosition = SnackbarOrigin;

export interface ToastPayload {
  message: ReactNode;
  severity?: AlertColor;
  position?: ToastPosition;
  autoHideDuration?: number;
}

export type ToastAction =
  | {
      type: 'open';
      payload: ToastPayload;
    }
  | { type: 'close' };

export interface ToastState {
  isOpen: boolean;
  message: ReactNode | null;
  severity?: AlertColor;
  position?: ToastPosition;
  autoHideDuration?: number;
}

export interface ToastContextProps {
  dispatch: Dispatch<ToastAction>;
}
