import type { Dispatch, ReactNode } from 'react';

export type BackdropAction =
  | {
      type: 'open';
      customMessage: ReactNode;
    }
  | { type: 'close' };

export interface BackdropState {
  isOpen: boolean;
  customMessage?: ReactNode;
}

export interface BackdropContextProps {
  dispatch: Dispatch<BackdropAction>;
}
