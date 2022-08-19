import { gql } from '@apollo/client';

export const QUERY_ME= gql`
query Me {
  me {
    _id
    username
    email
    password
    artstyle
  }
}
`;

export const QUERY_USER= gql`
query User {
  users {
    _id
    username
    email
    password
    artstyle
  }
}
`;

export const QUERY_PIECE= gql`
query Piece {
  pieces {
    _id
    name
    image
    bio
    price
    createdAt
    user {
      _id
      username
      email
      password
      artstyle
    }
    comments {
      _id
      commentText
      createdAt
    }
  }
}
`;