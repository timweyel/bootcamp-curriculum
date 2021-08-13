const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Book {
    _id: ID
    title: String
    author: String
    pages: Int
    sentence: String
  }
  input BookInput {
    title: String!
    author: String!
    pages: Int!
  }
  type Query {
    books: [Book]
    book(title: String!): Book
  }
  type Mutation {
    createBook(title: String!, author: String!, pages: Int!): Book
  }
`;
module.exports = typeDefs;