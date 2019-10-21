const express = require("express");
const router = express.Router();
// Add BCRYPT

// Import user model
const User = require("../../models/User");

// @route GET api/user
// @desc Get users from the server
// @access PUBLIC
router.get("/", (req, res) => {
	User.find()
		.then(console.log("users found"))
		.catch(err => console.log("error: ", err));
});

// @route POST api/user
// @desc Add user to server
// @access PUBLIC
router.post("/", (req, res) => {
	let { body } = req;
	User.find(item => item.userName === body.userName)
		.then(console.log("user available"))
		.catch(err => console.log("error: ", err));
});
