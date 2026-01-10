import { delay, HttpResponse, type JsonBodyType } from 'msw';

import type { MockedErrorResponseOptions, MockedSuccessResponseOptions } from './types';

export const mockedSuccessResponse = async <TBody extends JsonBodyType>({
  body,
  delayValue = 1000,
  status = 200,
  headers,
}: MockedSuccessResponseOptions<TBody>) => {
  await delay(delayValue);
  return HttpResponse.json(body, { status, headers });
};

export const mockedErrorResponse = async ({
  message,
  delayValue = 1000,
  status = 500,
  headers,
}: MockedErrorResponseOptions = {}) => {
  await delay(delayValue);
  return new HttpResponse(message || 'Internal Server Error', {
    status,
    headers: {
      'Content-Type': 'text/plain',
      ...headers,
    },
  });
};
