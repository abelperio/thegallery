const mongoose = require('mongoose');

const pieceSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    // image: (??),
    artist: User,
    bio: string,
    price: string,
})

const Piece = mongoose.model('Piece', commentSchema);

const handleError = (err) => console.error(err);

Piece.create(
    {
    name: 'Jerry the jester',
    artist: 'van gogh',
    bio: 'this is a test',
    price: '$40',
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
  );

module.exports = Piece;