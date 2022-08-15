const mongoose = require('mongoose');

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
})

const Piece = mongoose.model('Piece', pieceSchema);

module.exports = Piece;