import graphQLClient from '@/lib/graphql';
import getAllProducts from '@/lib/graphql/queries/getAllProducts';

export const getStaticProps = async () => {
  const { products } = await graphQLClient.request(getAllProducts);

  return {
    props: {
      products,
    },
  };
};

export default function Home() {
  return <>hello world</>;
}
