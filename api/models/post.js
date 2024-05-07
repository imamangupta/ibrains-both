const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    postName: {
        type: String,
    },
    discription: {
        type: String,
        required: true, 
    },
    url: {
        type: String,
        required: true, 
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema);
Post.createIndexes();
module.exports = Post;