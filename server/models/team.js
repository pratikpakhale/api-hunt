const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	last_qr: {
		type: String,
		default: '',
	},
	completed: {
		type: Boolean,
		default: false,
	},
	profileImage: {
		type: String,
	},
});

module.exports = mongoose.model('team', teamSchema);
