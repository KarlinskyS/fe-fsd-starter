import { useCallback, useContext, type ReactNode } from 'react';
import { BackdropContext } from './BackdropContext';

export const useBackdrop = () => {
  const ctx = useContext(BackdropContext);

  if (!ctx) {
    throw new Error('useBackdrop must be used within BackdropProvider');
  }
  const { dispatch } = ctx;

  const showBackdrop = useCallback(
    (customMessage?: ReactNode) => {
      dispatch({
        type: 'open',
        customMessage,
      });
    },
    [dispatch],
  );

  const hideBackdrop = useCallback(() => {
    dispatch({
      type: 'close',
    });
  }, [dispatch]);

  return { showBackdrop, hideBackdrop };
};
