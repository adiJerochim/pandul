const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    email: String,
    message: String,
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = { Comment };