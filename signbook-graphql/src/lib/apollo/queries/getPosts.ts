import { gql } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      userId
      id
      title
      body
    }
  }
`;

export default GET_POSTS;
