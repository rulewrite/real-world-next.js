import { gql } from 'graphql-request';
import graphQLClient from '..';

const getAllProducts = gql`
  query GetAllProducts {
    products {
      id
      name
      slug
      price
      images {
        id
        url
      }
      description
    }
  }
`;

export default graphQLClient.request<{ products: Array<Product> }>(
  getAllProducts
);
