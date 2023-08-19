const mongoose = require('mongoose')

const logSchema = new mongoose.Schema(
	{
		team: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'team',
		},
		qr: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
		},
		event: {
			type: String,
			required: true,
		},
		info: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
)

module.exports = mongoose.model('log', logSchema)
