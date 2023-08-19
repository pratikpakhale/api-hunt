const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	code: {
		type: String,
		unique: true,
		index: true,
	},
	count: {
		type: Number,
		default: 0,
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
})

module.exports = mongoose.model('team', teamSchema)
