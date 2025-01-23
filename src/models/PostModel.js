const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: { // Link to the User who creates the post

        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports  = {
    Post
};
