import { Suspense } from 'react';

// import Loading from './loading';

import { ChakraProviderWrapper } from '@/providers/chakra';
// import LocaleProvider from '@/providers/locale';
// import { NextAuthProvider } from '@/providers/next-auth';
import { QueryProvider } from '@/providers/react-query';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <ChakraProviderWrapper>
        <Suspense>
          {children}
        </Suspense>
      </ChakraProviderWrapper>
    </QueryProvider>
  );
}
