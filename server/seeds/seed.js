const db = require('../config/connection');
const { User, Piece } = require('../models');
const userSeeds = require('./userSeeds.json');
const pieceSeeds = require('./pieceSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('user seeds done!');
  process.exit(0);
});

db.once('open', async () => {
  try {
    await Piece.deleteMany({});

    await Piece.create(pieceSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('piece seeds done!');
  process.exit(0);
});