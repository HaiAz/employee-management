import { createAxiosInstance } from '@/libs/axios';
import { useEffect } from 'react';

import { API_URL } from '@/configs/configs';

const apiAxiosAuthInstance = createAxiosInstance(API_URL!);

function useApiAuthClient() {
  useEffect(() => {
    const interceptor = apiAxiosAuthInstance.interceptors.request.use((config) => {
      return config;
    });

    return () => {
      apiAxiosAuthInstance.interceptors.request.eject(interceptor);
    };
  }, [ ]);
  return apiAxiosAuthInstance;
}

export {
  useApiAuthClient,
};
