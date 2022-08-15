const { AuthenticationError } = require('apollo-server-express');
const { User, Piece } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ email: context.user.email});
      }
      throw new AuthenticationError('You must be signed in');
    },
    pieces: async () => {
      return Piece.find().sort({ createdAt: -1 });
    }

  },

  Mutation: {
    addUser: async (parent, { username, email, password, artstyle }) => {
      const user = await User.create({ username, email, password, artstyle });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPiece: async (parent, { name, image, bio }) => {
      return Piece.create({ name, image, bio });
    },
    addComment: async (parent, { pieceId, commentText }) => {
      return Piece.findOneAndUpdate(
        { _id: pieceId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePiece: async (parent, { pieceId }) => {
      return Piece.findOneAndDelete({ _id: pieceId });
    },
    removeComment: async (parent, { pieceId, commentId }) => {
      return Piece.findOneAndUpdate(
        { _id: pieceId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
