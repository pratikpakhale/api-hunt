const mongoose = require('mongoose')

const qrSchema = new mongoose.Schema(
	{
		code: {
			type: String,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
		team: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'team',
		},
	},
	{
		timestamps: true,
	},
)

module.exports = mongoose.model('qr', qrSchema)
