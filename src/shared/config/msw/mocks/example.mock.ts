import { http } from 'msw';
import { API_EXAMPLE_PATH } from '../../api';
import { mockedSuccessResponse } from '@shared/lib';

export const ExampleMocked = http.get(API_EXAMPLE_PATH, async () => {
  return mockedSuccessResponse({
    body: { status: 'ok' },
    delayValue: 300,
  });
});
