import type { HttpResponseInit, JsonBodyType } from 'msw';

export interface MockedSuccessResponseOptions<TBody extends JsonBodyType> {
  body: TBody;
  delayValue?: number;
  status?: number;
  headers?: HttpResponseInit['headers'];
}

export interface MockedErrorResponseOptions {
  message?: string;
  delayValue?: number;
  status?: number;
  headers?: HttpResponseInit['headers'];
}
