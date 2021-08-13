const { Book } = require('../models');
const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },
    book: async (parent, { title }) => {
      return Book.findOne({ title });
    }
  },
  Mutation: {
    createBook: async (_root, { title, author, pages }) => {
      return Book.create({ title, author, pages });
    }
  },
//  Field Resolver
  Book: {
    sentence: (parent) => {
      console.log("i am the parent", parent);
      return `$(parent.title} was written by ${parent.author} and it has ${parent.pages} pages`;
    }
  }
};
module.exports = resolvers;