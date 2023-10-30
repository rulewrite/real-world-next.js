import NavBar from '@/components/NavBar';
import CartContext from '@/lib/context/Cart';
import '@/styles/globals.css';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState({
    ckdu4a79c0h0g0158pqypj0dp: 3,
    ckdu4bmyg0h1f0102jk0mwn2g: 2,
    ckdu44mn40gxh010405uwgbtw: 2,
    ckdu48unc0gzq0158mbzvyzg3: 6,
    ckdu49mfc0h070102jgprxnj0: 5,
  } as {
    [productId: string]: number;
  });

  return (
    <ChakraProvider>
      <CartContext.Provider value={{ items, setItems }}>
        <Flex w="full" minH="100vh" bgColor="gray.100">
          <NavBar />

          <Box maxW="70vw" m="auto">
            <Component {...pageProps} />
          </Box>
        </Flex>
      </CartContext.Provider>
    </ChakraProvider>
  );
}
