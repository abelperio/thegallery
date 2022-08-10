const mongoose = require('mongoose');

const pieceSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    // image: (??),
    artist: User,
    bio: string,
    price: string,
})

module.exports = Piece;