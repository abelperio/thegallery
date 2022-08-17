import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation adduser($username: String!, $email: String!, $password: String!, $artstyle: String!) {
  addUser(username: $username, email: $email, password: $password, artstyle: $artstyle) {
    token
    user {
      _id
      username
      email
      password
      artstyle
    }
  }
}`;


export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      password
      artstyle
    }
  }
}`;

export const ADD_PIECE = gql`
mutation AddPiece($name: String!, $image: String!) {
  addPiece(name: $name, image: $image) {
    _id
    name
    image
    bio
    price
    createdAt
    comments {
      _id
      commentText
      createdAt
    }
  }
}`;

export const ADD_COMMENT = gql`
mutation AddComment($pieceId: ID!, $commentText: String!) {
  addComment(pieceId: $pieceId, commentText: $commentText) {
    _id
    name
    image
    bio
    price
    createdAt
    comments {
      _id
      commentText
      createdAt
    }
  }
}`;

export const REMOVE_PIECE = gql`
mutation RemovePiece($pieceId: ID!) {
  removePiece(pieceId: $pieceId) {
    _id
    name
    image
    bio
    price
    createdAt
    comments {
      _id
      commentText
      createdAt
    }
  }
}`;

export const REMOVE_COMMENT = gql`
mutation RemoveComment($pieceId: ID!, $commentId: ID!) {
  removeComment(pieceId: $pieceId, commentId: $commentId) {
    _id
    name
    image
    bio
    price
    createdAt
    comments {
      _id
      commentText
      createdAt
    }
  }
}`;