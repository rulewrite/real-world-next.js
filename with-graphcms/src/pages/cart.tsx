import CartContext from '@/lib/context/Cart';
import getProductsById from '@/lib/graphql/queries/getProductsById';
import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
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

  const viewProducts = products.map((product) => {
    return {
      ...product,
      viewPrice: product.price * (items[product.id] / 100),
    };
  });

  const getTotal = () => {
    if (!viewProducts.length) {
      return 0;
    }

    return viewProducts
      .map((product) => {
        return product.viewPrice;
      })
      .reduce((x, y) => x + y)
      .toFixed(2);
  };

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
        {!hasProducts ? (
          <Text>The cart is empty.</Text>
        ) : (
          <>
            {viewProducts.map((product) => {
              return (
                <Flex key={product.id} justifyContent={'space-between'} mb={4}>
                  <Box>
                    <Link href={`/product/${product.slug}`} passHref>
                      <Text
                        fontWeight={'bold'}
                        _hover={{
                          textDecoration: 'underline',
                          color: 'blue.500',
                        }}
                      >
                        {product.name}

                        <Text as={'span'} color={'gray.500'}>
                          {' '}
                          x{items[product.id]}
                        </Text>
                      </Text>
                    </Link>
                  </Box>

                  <Box>{product.viewPrice.toFixed(2)}</Box>
                </Flex>
              );
            })}

            <Divider my={10} />

            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text fontSize={'xl'} fontWeight={'bold'}>
                Total: {getTotal()}
              </Text>

              <Button colorScheme="blue">Pay now</Button>
            </Flex>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
