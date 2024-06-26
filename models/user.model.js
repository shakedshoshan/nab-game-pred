// models/User.js
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    leagues: [{
      type: Number,
      required: true,
      default: 0,
    }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;