const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// typeDefinitions ==== GraphQL schemas
// resolvers === GraphQL API's
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

//creating an endpoint in our ApolloServer
// and that endpoint is /GraphQL
// Anytime a GraphQL resolver is hit, Apollo-express-server
// will forward that GraphQL request to /graphql endpoint
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
