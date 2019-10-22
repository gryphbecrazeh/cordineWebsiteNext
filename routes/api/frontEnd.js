const express = require('express');
const router = express.Router();

// Import Front End Model
const FrontEnd = require('../../models/FrontEnd');

// @route GET api/frontEnd
// @desc On contact get all relevant FrontEnd posts
// @access PUBLIC
router.get('/', (req, res) => {
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
router.post('/', (req, res) => {
	let newPost = new FrontEnd(req.body);
	newPost
		.save()
		.then(item => {
			res.status(200).json({
				item: item,
				success: true,
				msg: 'Post Added Successfully'
			});
		})
		.catch(err =>
			res
				.status(400)
				.json({ err: err, success: false, msg: 'Post was not added' })
		);
});

module.exports = router;
