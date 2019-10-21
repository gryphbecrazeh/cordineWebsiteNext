const express = require("express");
const router = express.Router();
// Add BCRYPT

// Import user model
const User = require("../../models/User");

// @route POST api/auth
// @desc Login to server
// @access PUBLIC
router.post("/id:", (req, res) => {
	let { body } = req;
	User.find;
});
