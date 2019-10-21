const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// Import user model
const User = require("../../models/User");

// @route POST api/auth
// @desc Login to server
// @access PUBLIC
router.post("/", (req, res) => {
	let { body } = req;
	User.find(item => item.userName === body.userName)
		.then(console.log("user found"))
		.catch(err => console.log("error: ", err));
});
