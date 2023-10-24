import graphQLClient from '@/lib/graphql';
import getAllProducts from '@/lib/graphql/queries/getAllProducts';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const { products } = await graphQLClient.request<{
    products: Array<Product>;
  }>(getAllProducts);

  return {
    revalidate: 60, // 60초
    props: {
      products,
    },
  };
};

export default function Home() {
  return <>hello world</>;
}
