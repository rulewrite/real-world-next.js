import CartContext from '@/lib/context/Cart';
import getProductsById from '@/lib/graphql/queries/getProductsById';
import { Box, Divider, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

const Cart: React.FC = () => {
  const { items } = useContext(CartContext);
  const [products, setProducts] = useState<Array<CartProduct>>([]);
  const ids = Object.keys(items);
  const hasProducts = ids.length;

  useEffect(() => {
    if (!hasProducts) {
      return;
    }

    getProductsById(ids)
      .then(({ products }) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasProducts, JSON.stringify(ids)]);

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
