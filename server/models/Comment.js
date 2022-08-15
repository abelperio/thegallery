const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema ({
    comment:{type: String, required: true},
    commentBy: User,
    createdAt: {type: Date, default: Date.now },
})

const Comment = mongoose.model('Comment', commentSchema);

const handleError = (err) => console.error(err);

Comment.create(
    {
      comment: 'i like this'
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
  );

module.exports = Comment;