'use client';

import { useState } from 'react';
// import { useToast } from '@chakra-ui/react';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { Props } from '@/types/common';

export const QueryProvider = ({ children }: Props) => {
  // const toast = useToast();
  const [ queryClient ] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
        mutationCache: new MutationCache({
          onError: (error) => {
            // TODO: show proper error here? Maybe implement error type that has title and message?
            // toast({
            //   title: 'Error.',
            //   description: `Failed to create ${error} .`,
            //   status: 'error',
            //   duration: 9000,
            //   isClosable: true,
            // });
          },
          onSuccess: () => {
            // TODO: show proper message here?
            // toast({
            //   title: 'Saved',
            //   description: 'Mutation success.',
            //   status: 'success',
            //   duration: 9000,
            //   isClosable: true,
            // });
          },
        }),
        queryCache: new QueryCache({
          onError: (error) => {
            // TODO: show proper error here? Maybe implement error type that has title and message?
            // toast({
            //   title: 'Error.',
            //   description: `Failed to create ${error} .`,
            //   status: 'error',
            //   duration: 9000,
            //   isClosable: true,
            // });
          },
        }),
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
