// models/league.js
const mongoose = require('mongoose');

const LeagueSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter League name."],
    },
    users:[{
      type: String,
      required: false,
    }]
  },
  {
    timestamps: true,
  }
);

const League = mongoose.model("League", LeagueSchema);

module.exports = League;