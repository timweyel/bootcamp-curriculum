// the downside to creating a vanilla js graphql api
// is that we have to declare our schema's twice
// 1st we create a schema for our database
// 2nd we create a schema for our graphql API
const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    _id: ID!
    name: String
    email: String
    password: String
    job: String
    country: String
  }
  type Query {
    users: [User]
    user(email: String): User
  }
  type Mutation {
    createUser(name: String!, email: String!, password: String!, job: String!, country: String!): User
  }
`;
module.exports = typeDefs;