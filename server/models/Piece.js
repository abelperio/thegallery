const mongoose = require('mongoose');

const pieceSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    image: {type: String},
    bio: {type: String},
    price: {type: Number},
})

const Piece = mongoose.model('Piece', pieceSchema);

const handleError = (err) => console.error(err);

module.exports = Piece;