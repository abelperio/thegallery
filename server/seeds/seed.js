const db = require('../config/connection');
const { User, Piece } = require('../models');
const userSeeds = require('./userSeeds.json');
const pieceSeeds = require('./pieceSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Piece.deleteMany({});

    await User.create(userSeeds);
    await Piece.create(pieceSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
