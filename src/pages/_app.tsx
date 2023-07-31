/* eslint-disable @typescript-eslint/ban-types */
import type { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </QueryClientProvider>
  );
}
