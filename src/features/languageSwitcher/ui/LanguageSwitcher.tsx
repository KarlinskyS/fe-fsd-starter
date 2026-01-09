import { Box, Button, Typography } from '@shared/ui';
import { useLanguageSwitcher } from '../model';

export const LanguageSwitcher = () => {
  const { locale, setLocale, t, languageOptions } = useLanguageSwitcher();

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, padding: 2 }}>
      <Typography component="span">{t('languageSwitcher.label')}</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {languageOptions.map((option) => {
          const isActive = option.value === locale;

          return (
            <Button
              key={option.value}
              variant={isActive ? 'contained' : 'outlined'}
              onClick={() => setLocale(option.value)}
              aria-pressed={isActive}
            >
              {t(option.labelKey)}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
