import axios, { AxiosInstance, AxiosError } from 'axios';
import { ConflictError } from './errors';

function setupAxiosResponseInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (response) => {
      if (response.status === 204) {
        return { message: 'No content' };
      }

      return response.data;
    },

    async (error: AxiosError) => {
      const { response } = error;

      if (!response) {
        console.error('❌ Network or CORS error', error);
        throw new Error('Network error');
      }

      const status = response.status;

      if (status === 404) {
        throw new Error('Resource not found');
      }

      if (status === 500) {
        throw new Error('Server error');
      }

      if (status === 409) {
        // TODO: we should read from the response itself
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errorBody = response.data as any;
        throw new ConflictError(
          errorBody.errors ?? 'Conflict error',
          errorBody.message,
        );
      }

      throw new Error(`HTTP error! status: ${status}`);
    },
  );
}

export function createAxiosInstance(baseUrl: string) {
  const apiAxiosAuthInstance = axios.create({ baseURL: baseUrl });

  // Handle response and errors
  setupAxiosResponseInterceptor(apiAxiosAuthInstance);
  return apiAxiosAuthInstance;
}
