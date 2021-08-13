const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      try {
        return await User.find();
      } catch (e) {
        return [];
      }
    },
    // 1st parameter is root,
    // later on we can learn more about Field resolver
    // the root stands for teh data that we are getting back from the previous query 
    user: async (_root, { email }) => {
      console.log(email);
      return user.findOne({ email });
    },
  },
  Mutation: {
    createUser: async (_root, { email, name, password, job, country }) => {
      return User.create({ email, name, password, job, country });
    }
  }
};

module.exports = resolvers;