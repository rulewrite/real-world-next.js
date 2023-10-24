import getAllProducts from '@/lib/graphql/queries/getAllProducts';
import getProductDeatil from '@/lib/graphql/queries/getProductDetail';
import { GetStaticPaths, GetStaticProps } from 'next';

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

export const getStaticProps: GetStaticProps<
  { product: Product | null },
  { slug: string }
> = async ({ params }) => {
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

const ProductPage: React.FC = () => {
  return null;
};

export default ProductPage;
