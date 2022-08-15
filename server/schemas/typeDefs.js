const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    artstyle: String
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Piece {
    _id: ID
    name: String
    image: String
    bio: String
    price: Number
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    me: User
    pieces:[Piece]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, artstyle: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
