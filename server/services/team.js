const config = require('../config');
const CError = require('../utils/CError');
const { v4: uuidv4 } = require('uuid');

const team = require('../models/team');
const User = require('../models/user');
module.exports = class Team {
	async joinTeam(userId, teamId) {
		const checkTeam = await team.findOne({ _id: teamId });
		if (checkTeam.count === 4) {
			throw new CError('Team full!', 400);
		}
		const checkUser
	}

	async getLastQRIndex(teamId) {}

	async createTeam(name) {
		const code = uuidv4();
		const newTeam = new team({ name, code });
		await newTeam.save().catch((error) => {
			if (error.code === 11000) {
				throw new CError('The Name is already in use', 400);
			}
		});
		return newTeam._id;
	}
};
