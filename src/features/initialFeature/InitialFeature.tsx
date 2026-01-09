import { useBackdrop, useTranslation } from '@shared/lib';
import { Box, Button, Typography } from '@shared/ui';
import { useEffect, useRef } from 'react';

export const InitialFeature = () => {
  const { showBackdrop, hideBackdrop } = useBackdrop();
  const { t } = useTranslation();
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
      {t('initialFeature.title')}
      <Typography>{t('initialFeature.greeting')}</Typography>
      <Button onClick={handleOpen}>{t('initialFeature.openBackdrop')}</Button>
    </Box>
  );
};
