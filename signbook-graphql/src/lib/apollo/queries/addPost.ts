import { gql } from '@apollo/client';

const ADD_POST = gql`
  mutation InsertNewPost($title: String!, $body: String!, $userId: Int!) {
    insert_post(objects: { title: $title, body: $body, userId: $userId }) {
      returning {
        id
      }
    }
  }
`;

export default ADD_POST;
