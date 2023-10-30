import CartContext from '@/lib/context/Cart';
import getAllProducts from '@/lib/graphql/queries/getAllProducts';
import getProductDeatil from '@/lib/graphql/queries/getProductDetail';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Select,
  Text,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useContext, useState } from 'react';

interface Props {
  product: Product | null;
}

// 각 상품별로 정적 페이지 생성
export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await getAllProducts;

  const paths = products.map((product) => {
    return {
      params: {
        slug: product.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  const slug = params?.slug;

  if (!slug) {
    return {
      props: {
        product: null,
      },
    };
  }

  const { products } = await getProductDeatil(slug);

  return {
    props: {
      product: products[0] ?? null,
    },
  };
};

const SelectQuantity: React.FC<{ onChange: (value: string) => void }> = (
  props
) => {
  const quantity = [...Array.from({ length: 10 })];

  return (
    <Select
      placeholder="Quantity"
      onChange={(event) => props.onChange(event.target.value)}
    >
      {quantity.map((_, index) => {
        const value = index + 1;

        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </Select>
  );
};

const ProductPage: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { items, setItems } = useContext(CartContext);

  if (!product) {
    return null;
  }

  const alreadyInCart = items[product.id];

  const addToCart = () => {
    setItems({
      ...items,
      [product.id]: quantity,
    });
  };

  return (
    <Flex rounded="xl" boxShadow="2xl" w="full" p={16} bgColor="white">
      <Image height="96" width="96" src={product.images[0].url} alt="" />

      <Box ml="12" width="container.xs">
        <Text as="h1" fontSize="4xl" fontWeight="bold">
          {product.name}
        </Text>

        <Text
          lineHeight="none"
          fontSize="xl"
          my="3"
          fontWeight="bold"
          textColor="blue.500"
        >
          {product.price / 100}
        </Text>

        <Text maxW="96" textAlign="justify" fontSize="sm">
          {product.description}
        </Text>

        <Divider my="6" />

        <Grid gridTemplateColumns="2fr 1fr" gap="5" alignItems="center">
          <SelectQuantity
            onChange={(quantity) => {
              setQuantity(parseInt(quantity));
            }}
          />
          <Button colorScheme="blue" onClick={addToCart}>
            {alreadyInCart ? 'Update' : 'Add to Cart'}
          </Button>
        </Grid>
      </Box>
    </Flex>
  );
};

export default ProductPage;
