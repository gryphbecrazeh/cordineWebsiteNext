const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
	date: {
		type: Date,
		default: Date.now()
	},
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	fullName: {
		type: String
		// default: `${this.firstName} ${this.lastName}`
	},
	dateBirth: {
		type: Date
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	loginLocation: {
		type: Array
	},
	userName: {
		type: String,
		required: true
	}
});

module.exports = User = mongoose.model("user", UserSchema);
