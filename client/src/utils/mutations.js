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
    }
  }
}`