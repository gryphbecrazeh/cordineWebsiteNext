const express = require("express");
const router = express.Router();

// Import Front End Model
const FrontEnd = require("../../models/FrontEnd");

// @route GET api/frontEnd
// @desc On contact get all relevant FrontEnd posts
// @access PUBLIC
router.get("/", (req, res) => {
	console.log("getting posts");
	FrontEnd.find()
		.sort({ date: -1 })
		.then(posts => res.json(posts))
		.catch(err =>
			res.status(400).json({
				success: false,
				msg: err
			})
		);
});
router.post("/", (req, res) => {
	let { body } = req;
	console.log(body);
});

module.exports = router;
