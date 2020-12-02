const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('message', MessageSchema);
