import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#ffebee',
      200: '#e57373',
      300: '#f44336',
      400: '#e53935',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
