import { Link } from '@tanstack/react-router';
import { routePaths } from '@shared/config';
import { useTranslation, useToast } from '@shared/lib';
import { Box, Button, Typography } from '@shared/ui';
import { ThemeSwitcherToggle } from '@features/themeSwitcher';

export const HomePage = () => {
  const { t } = useTranslation();
  const showToast = useToast();

  const handleShowToast = () => {
    showToast({
      message: t('homePage.toastMessage'),
      severity: 'success',
    });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">{t('homePage.title')}</Typography>
      <Box sx={{ marginTop: 2 }}>
        <ThemeSwitcherToggle />
      </Box>
      <Typography sx={{ marginTop: 1, marginBottom: 2 }}>
        {t('homePage.subtitle')}
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Button onClick={handleShowToast} variant="contained">
          {t('homePage.showToast')}
        </Button>
      </Box>
      <Button component={Link} to={routePaths.second} variant="contained">
        {t('homePage.goToSecondPage')}
      </Button>
    </Box>
  );
};
