import mongoose, { Document, Schema } from "mongoose";
//const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

export interface UserInfo extends Document {
  id: string;
  leagues: Number//{ leagueId: number }[];
}


const userInfoSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      leagues:{
        type: Number
      } 
    },
  );

const UserInfo = mongoose.models.UserInfo || mongoose.model<UserInfo>("UserInfo", userInfoSchema);
module.exports = UserInfo;