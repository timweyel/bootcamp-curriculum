const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(user);

      if (!user) {
        throw new AuthenticationError('That user does not exist');
      }

      if (password !== user.password) {
        throw new AuthenticationError('Incorrect credentials');
      }

      jwt.sign({ _id: user._id}, 'secret', {expiresIn: 1000 * 60 * 60 * 24 })
      return { token, user };
    }
  }
};

module.exports = resolvers;
