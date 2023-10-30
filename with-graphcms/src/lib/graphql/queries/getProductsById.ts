import { gql } from 'graphql-request';
import graphQLClient from '..';

const query = gql`
  query GetProductsByID($ids: [ID!]) {
    products(where: { id_in: $ids }) {
      id
      name
      price
      slug
    }
  }
`;

const getProductsById = (ids: Array<string>) => {
  return graphQLClient.request<{ products: Array<CartProduct> }>(query, {
    ids,
  });
};

export default getProductsById;
