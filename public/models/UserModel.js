const mongoose = require('mongoose');

const user = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},

	password: {
		type: String,
		required: true
	},
	department: {
		type: String,
		required: true
	},
	position: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	// date: {
	// 	type: Date,
	// 	default: Date.now
	// }
});

// module.exports = mongoose.model('User', user);
