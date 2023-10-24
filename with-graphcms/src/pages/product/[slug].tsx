import graphQLClient from '@/lib/graphql';
import getAllProducts from '@/lib/graphql/queries/getAllProducts';
import { GetStaticPaths, GetStaticProps } from 'next';

// 각 상품별로 정적 페이지 생성
export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await graphQLClient.request<{
    products: Array<Product>;
  }>(getAllProducts);

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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const ProductPage: React.FC = () => {
  return null;
};

export default ProductPage;
