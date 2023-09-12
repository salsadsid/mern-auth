const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { ObjectId } = mongoose.Schema.Types;
const friendSchema = mongoose.Schema(
  {
    user: {
      name: String,
      email: String,
      id: {
        type: ObjectId,
        ref: "User",
        // unique:true
      },
    },
    friends: [
      {
        name: String,
        email: String,
        id: {
          type: ObjectId,
          ref: "User",
        },
        _id:false
      },
    ],
    requests: [
      {
        name: String,
        email: String,
        id: {
          type: ObjectId,
          ref: "User",
        },
        _id:false
      },
    ],
    
  },
  { timestamps: true }
);

const Friend = mongoose.models.Friend || mongoose.model("Friend", friendSchema);

module.exports = Friend;
