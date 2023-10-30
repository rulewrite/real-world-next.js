import { gql } from 'graphql-request';
import graphQLClient from '..';

const query = gql`
  query GetProductDetailsByID($ids: [ID!]) {
    products(where: { id_in: $ids }) {
      id
      name
      price
      slug
      description
      images {
        id
        url
      }
    }
  }
`;

const getProductDetailsById = (ids: Array<string>) => {
  return graphQLClient.request<{ products: Array<Product> }>(query, {
    ids,
  });
};

export default getProductDetailsById;
