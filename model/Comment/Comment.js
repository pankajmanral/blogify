const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment