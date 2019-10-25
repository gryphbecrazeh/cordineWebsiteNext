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
		.then((posts = []) => {
			res.json([...posts]);
		})
		.catch(err => console.log("err"));
});

// @route POST api/frontEnd
// @desc Add Post
// @access PUBLIC
router.post("/", (req, res) => {
	console.log("adding post");
	let newPost = new FrontEnd(req.body);
	console.log(newPost);
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

// @route PUT api/frontEnd
// @desc Update Post
// @access PUBLIC
router.put("/:id", (req, res) => {
	let updatedPost = req.body;
	FrontEnd.findByIdAndUpdate(updatedPost._id, updatedPost)
		.then(post =>
			res.json({
				post: post,
				success: true,
				msg: "Post was updated Successfully"
			})
		)
		.catch(err => res.status(404).json({ success: false }));
});

// @route DELETE api/frontEnd
// @desc Delete Post
// @access PUBLIC
router.delete("/:id", (req, res) => {
	let target = req.params.id;
	FrontEnd.findById(target)
		.then(post => post.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
