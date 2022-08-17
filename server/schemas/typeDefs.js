const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    artstyle: String
  }

  type Piece {
    _id: ID
    name: String
    image: String
    bio: String
    price: Float
    createdAt: String
    comments: [Comment]!
  }
  type Comment{
    _id: ID
    commentText: String
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
    addPiece(name: String!, image: String!): Piece
    addComment(pieceId: ID!, commentText: String!): Piece
    removePiece(pieceId: ID!): Piece
    removeComment(pieceId: ID!, commentId: ID!): Piece
  }
`;

module.exports = typeDefs;
