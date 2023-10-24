import { Box, Divider, Text } from '@chakra-ui/react';

const Cart: React.FC = () => {
  return (
    <Box
      rounded={'xl'}
      boxShadow={'2xl'}
      w={'container.lg'}
      p={16}
      bgColor={'white'}
    >
      <Text as={'h1'} fontSize={'2xl'} fontWeight={'bold'}>
        Cart
      </Text>

      <Divider my={10} />

      <Box>
        <Text>The cart is empty.</Text>
      </Box>
    </Box>
  );
};

export default Cart;
