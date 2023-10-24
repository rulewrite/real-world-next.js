import ProductCard from '@/components/ProductCard';
import getAllProducts from '@/lib/graphql/queries/getAllProducts';
import { Grid } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const { products } = await getAllProducts;

  return {
    revalidate: 60, // 60초
    props: {
      products,
    },
  };
};

const Home: React.FC<{ products: Array<Product> }> = (props) => {
  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)" gap="5">
      {props.products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </Grid>
  );
};

export default Home;
