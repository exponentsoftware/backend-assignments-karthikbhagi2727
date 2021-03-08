const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	category: {
		type: [ String ],
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Student_model', StudentSchema);