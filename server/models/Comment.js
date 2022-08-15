const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new mongoose.Schema ({
    comment:{
      type: String, 
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;