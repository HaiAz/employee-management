'use client';

import { PropsWithChildren, Suspense } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';

import Loading from '@/components/Loading';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Flex h="100vh" pos="relative" direction="column" w="100%">
      <Container display="flex" flexDir="row" w="100%" flex={1}>
        <Suspense fallback={<Loading />}>
          <Box flex={1}>{children}</Box>
        </Suspense>
      </Container>
    </Flex>
  );
}
