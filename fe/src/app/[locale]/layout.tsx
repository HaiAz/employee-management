import { Suspense } from 'react';

import { ChakraProviderWrapper } from '@/providers/chakra';
// import LocaleProvider from '@/providers/locale';
import { QueryProvider } from '@/providers/react-query';
import Loading from './loading';
import { Props } from '@/types/common';

export default function AppLayout({
  children,
}: Props) {
  return (
    <QueryProvider>
      <ChakraProviderWrapper>
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
      </ChakraProviderWrapper>
    </QueryProvider>
  );
}
