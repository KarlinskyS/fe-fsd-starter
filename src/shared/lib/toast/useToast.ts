import { useCallback, useContext } from 'react';
import { ToastContext } from './ToastContext';
import type { ToastPayload } from './types';

export const useToast = () => {
  const ctx = useContext(ToastContext);

  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }

  const { dispatch } = ctx;

  const showToast = useCallback(
    (payload: ToastPayload) => {
      dispatch({
        type: 'open',
        payload,
      });
    },
    [dispatch],
  );

  return showToast;
};
