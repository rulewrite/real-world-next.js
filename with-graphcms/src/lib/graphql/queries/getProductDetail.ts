import { gql } from 'graphql-request';
import graphQLClient from '..';

const getProductBySlug = gql`
  query GetProductBySlug($slug: String!) {
    products(where: { slug: $slug }) {
      id
      images(first: 1) {
        id
        url
      }
      name
      price
      slug
      description
    }
  }
`;

const getProductDeatil = (slug: string) => {
  return graphQLClient.request<{ products: Array<Product> }>(getProductBySlug, {
    slug,
  });
};

export default getProductDeatil;
