const config = require('../config');
const CError = require('../utils/CError');

const team = require('../models/team');
const User = require('../models/user');

module.exports = class Team {
	async joinTeam(userId, teamId) {
		const checkTeam = await User.find({ team: teamId });
		if (checkTeam.length >= 4) {
			throw new CError('Team is full', 400);
		}
		const checkUser = await User.findById(userId);
		if (checkUser.team) {
			throw new CError('User already joined a team', 400);
		}
		await User.updateOne({ _id: userId }, { team: teamId });
		return { message: 'Successfully joined the team', code: 200 };
	}

	async getLastQRIndex(teamId) { }

	async createTeam(name, userId) {
		const newTeam = new team({ name });
		await newTeam.save().catch((error) => {
			if (error.code === 11000) {
				throw new CError('The Name is already in use', 400);
			}
		});
		await User.updateOne({ _id: userId }, { team: newTeam._id });
		return { message: 'Successfully created a team', code: 201 };
	}
};
