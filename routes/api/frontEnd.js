const express = require("express");
const router = express.Router();

// Import Front End Model
const FrontEnd = require("../../models/FrontEnd");

// @route GET api/frontEnd
// @desc On contact get all relevant FrontEnd posts
// @access PUBLIC
router.get("/", (req, res) => {
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

// @route POST api/frontEnd
// @desc Add Post
// @access PUBLIC
router.post("/", (req, res) => {
	let newPost = new FrontEnd(req.body);
	newPost
		.save()
		.then(item => {
			res.status(200).json({
				item: item,
				success: true,
				msg: "Post Added Successfully"
			});
		})
		.catch(err =>
			res
				.status(400)
				.json({ err: err, success: false, msg: "Post was not added" })
		);
});

router.put("/:id", (req, res) => {
	let updatedPost = req.body;
	FrontEnd.findByIdAndUpdate(updatedPost._id, updatedPost)
		.then(post =>
			res.json({ success: true, msg: "Post was updated Successfully" })
		)
		.catch(err => res.status(404).json({ success: false }));
});

router.delete("/:id", (req, res) => {
	let target = req.params.id;
	FrontEnd.findById(target)
		.then(post => post.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
