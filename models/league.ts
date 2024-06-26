const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema(
    {
      id: {
        type: String,
        unique: true,
        required: true
      },
      name:{
        type: String,
        required: true
      },
      users: [{
        userId: String,
        score: Number 
      }],
    },
  );

const UserInfo = mongoose.model("UserInfo", userInfoSchema);
module.exports = UserInfo;