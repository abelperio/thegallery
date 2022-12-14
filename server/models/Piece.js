const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const User = require('./User');

const pieceSchema = new mongoose.Schema ({
    name: {
      type: String, 
      required: true
    },
    image: {type: String},
    bio: {type: String},
    price: {type: Number},
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    comments: [
      {
        commentText:{
          type: String, 
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        }
      }
    ]
})

const Piece = mongoose.model('Piece', pieceSchema);

module.exports = Piece;