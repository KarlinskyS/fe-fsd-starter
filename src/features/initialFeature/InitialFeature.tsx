import { useBackdrop } from '@shared/lib';
import { Box, Button, Typography } from '@shared/ui';
import { useEffect, useRef } from 'react';

export const InitialFeature = () => {
  const { showBackdrop, hideBackdrop } = useBackdrop();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpen = () => {
    showBackdrop();
    timerRef.current = setTimeout(() => {
      hideBackdrop();
    }, 1500);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return (
    <Box>
      HI Application
      <Typography> Hello world!</Typography>
      <Button onClick={handleOpen}>open Backdrop</Button>
    </Box>
  );
};
