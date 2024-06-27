const express = require("express");
const User = require("../models/user.model.js");
const League = require("../models/league.model.js");
const router = express.Router();
const { createUser , getUser, getAllUsers, updateUser } = require("../controllers/user.controller.js");
const { getAllLeagues, getLeague, createLeague, getLeagueByName, updateLeague} = require("../controllers/league.controller.js");


// ----------- USER ROUTES ------------------//
// Get user
router.get("/user/:id", getUser);
router.get("/user", getAllUsers);

// Create user
router.post("/user", createUser);

router.put("/user/:id", updateUser);




// ----------- LEAGUE ROUTES ------------------//
// Get league
router.get("/league/:id", getLeague);
router.get("/league", getAllLeagues);

router.get("/league/:id", getLeagueByName);

// Update league
router.put("/league/:id", updateLeague);

// Create league
router.post("/league", createLeague);

module.exports = router;