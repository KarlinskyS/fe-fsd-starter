import { Box, Button, Typography } from '@shared/ui';
import type { TranslationKey } from '@shared/config';
import { useTranslation } from '@shared/lib';

import { useGetMockRequest } from '../api';
import type { MockRequestStatus } from '../model';

const statusKeys = {
  idle: 'homePage.mockRequestStatusIdle',
  loading: 'homePage.mockRequestStatusLoading',
  success: 'homePage.mockRequestStatusSuccess',
  error: 'homePage.mockRequestStatusError',
} as const satisfies Record<MockRequestStatus, TranslationKey>;

export const MockRequestPanel = () => {
  const { t } = useTranslation();
  const { mutate: getMock, status } = useGetMockRequest();
  const viewStatus: MockRequestStatus = status === 'pending' ? 'loading' : status;
  const handleMockRequest = () => getMock();

  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h6">{t('homePage.mockRequestTitle')}</Typography>
      <Typography sx={{ marginTop: 1, marginBottom: 2 }}>
        {t(statusKeys[viewStatus])}
      </Typography>
      <Button onClick={handleMockRequest} variant="contained" disabled={status === 'pending'}>
        {t('homePage.mockRequestButton')}
      </Button>
    </Box>
  );
};
