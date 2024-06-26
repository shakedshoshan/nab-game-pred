const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();
const { createUser , getUser, getAllUsers } = require("../controllers/user.controller.js");

// Get user
router.get("/:id", getUser);
router.get("/", getAllUsers);

// Create user
router.post("/", createUser);

module.exports = router;