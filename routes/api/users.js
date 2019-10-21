const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

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
	const { name, userName, password } = req.body;

	// Simple Validation
	if (!name || !userName || !password) {
		return res.status(400).json({ msg: "Please Enter All Fields" });
	}

	// Check Existing User
	User.findOne({ userName }).then(user => {
		if (user) return res.status(400).json({ msg: "User already exists" });

		const newUser = new User(req.body);

		// Create salt & hash
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				newUser.save().then(user => {
					jwt.sign(
						{ id: user.id },
						config.get("jwtSecret"),
						{ expiresIn: 3600 },
						(err, token) => {
							if (err) throw err;
							res.json({
								token,
								user: {
									id: user.id,
									name: user.name,
									userName: user.userName
								},
								success: true,
								msg: "User Added"
							});
						}
					);
				});
			});
		});
	});
});

// @route PUT api/users:id
// @desc edit user
// @accesss Private
router.put("/:id", (req, res) => {
	const { _id, name, userName, password } = req.body;
	let id = _id;
	// Simple Validation
	if (!_id || !name || !userName) {
		return res.json({ msg: "Please enter all fields" });
	}
	if (password) {
		let newPassword;
		// Create salt & hash
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(password, salt, (err, hash) => {
				if (err) throw err;
				newPassword = hash;
				let updatedUser = {
					id,
					name,
					userName
				};
				updatedUser.password = newPassword;
				// Check Existing User
				User.findByIdAndUpdate(id, updatedUser, { useFindAndModify: false })
					.then(item =>
						res.json({
							success: true,
							msg: "User Successfully Editted, Password has been changed"
						})
					)
					.catch(err => res.json(err));
			});
		});
	} else {
		let edittedUser = { ...req.body };
		User.findByIdAndUpdate(id, edittedUser, { useFindAndModify: false })
			.then(item => {
				console.log("success");
				return res.json({
					user: item,
					success: true,
					msg: "User Successfully Editted"
				});
			})
			.catch(err => {
				return res.json(err);
			});
	}
});

// @route DELETE api/users:id
// @desc delete user
// @accesss Private
router.delete("/:id", (req, res) => {
	User.findById(req.params.id)
		.then(user => user.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
