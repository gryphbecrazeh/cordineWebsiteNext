const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
	date: {
		type: Date,
		default: Date.now()
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	fullName: {
		type: String
		// default: `${this.firstName} ${this.lastName}`
	},
	dateBirth: {
		type: Date
	},
	email: {
		type: String
	},
	password: {
		type: String,
		required: true
	},
	loginLocation: {
		type: Array
	},
	userName: {
		type: String
	}
});

module.exports = User = mongoose.model("user", UserSchema);
