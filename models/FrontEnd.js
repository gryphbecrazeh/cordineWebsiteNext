const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FrontEndSchema = new Schema({
	date: {
		type: Date,
		default: Date.now()
	},
	technologies: {
		type: Array,
		required: true,
		default: []
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	images: {
		type: Array,
		required: true,
		default: []
	},
	repo: {
		type: String
	},
	codePen: {
		type: String
	}
});

module.exports = FrontEnd = mongoose.model('frontEnd', FrontEndSchema);
