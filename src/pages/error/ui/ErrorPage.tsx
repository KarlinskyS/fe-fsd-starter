import type { ErrorComponentProps } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { routePaths } from '@shared/config';
import { Box, Button, Typography } from '@shared/ui';

export const ErrorPage = ({ error, reset }: ErrorComponentProps) => {
  const description =
    import.meta.env.DEV && error instanceof Error
      ? error.message
      : 'Попробуйте обновить страницу или вернуться позже.';

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">Что-то пошло не так</Typography>
      <Typography sx={{ marginTop: 1, marginBottom: 2 }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button onClick={reset} variant="contained">
          Повторить
        </Button>
        <Button component={Link} to={routePaths.home} variant="outlined">
          На главную
        </Button>
      </Box>
    </Box>
  );
};
