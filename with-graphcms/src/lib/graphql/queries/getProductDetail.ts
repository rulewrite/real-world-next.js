import { gql } from 'graphql-request';
import graphQLClient from '..';

const getProductDetail = gql`
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

export default graphQLClient.request<{ products: Array<Product> }>(
  getProductDetail
);
