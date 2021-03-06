const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },

  name: {
    type: String,
  },

  text: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
  },

  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],

  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },

      name: {
        type: String,
      },

      text: {
        type: String,
        required: true,
      },

      date: {
        type: Date,
        default: Date.now,
      },

      avatar: {
        type: String,
      },
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model("posts", postSchema);
