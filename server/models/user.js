const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
		profileImage: {
			type: String,
			required: true,
		},
		team: {
			type: mongoose.Schema.ObjectId,
			ref: 'teamModel',
		},
		badgrLink: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('user', userSchema);
