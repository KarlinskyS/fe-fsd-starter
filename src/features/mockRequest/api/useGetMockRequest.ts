import { API_EXAMPLE_PATH } from '@shared/config';
import { useHttpClientContext } from '@shared/lib';
import { useMutation } from '@tanstack/react-query';
import type { MockRequestResponseDto } from '../model';

export const useGetMockRequest = () => {
  const { httpClient } = useHttpClientContext();
  return useMutation({
    mutationKey: [API_EXAMPLE_PATH],
    mutationFn: async () => {
      const { data } = await httpClient.get<MockRequestResponseDto>(API_EXAMPLE_PATH);
      return data;
    },
  });
};
