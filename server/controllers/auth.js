const AuthService = require('../services/auth');
const CError = require('../utils/CError');
const TeamService = require('../services/team');

const authService = new AuthService();
const teamService = new TeamService();

exports.signin = async (req, res, next) => {
	try {
		const { code } = req.body;
		const userDetails = await authService.codeExchange(code);
		const signin = await authService.signin(userDetails);
		res.status(signin.code).json({ message: signin.message, token: signin.token });
	} catch (error) {
		next(error);
	}
};

exports.createTeam = async (req, res, next) => {
	try {
		if ((req.user.team)) {
			throw new CError('Team already joined', 400);
		}
		await teamService.createTeam(req.body.name, req.user.id);
		res.status(201).json({ message: 'Successfully created a team' });
	} catch (error) {
		next(error);
	}
};
exports.joinTeam = async (req, res, next) => {
	try {
		if (req.user.team) {
			throw new CError('Team already joined', 400);
		}
		const userId = req.user.id;
		const { teamId } = req.body;
		await teamService.joinTeam(userId, teamId);
		res.status(200).json({ message: 'Successfully joined the team' });
	} catch (error) {
		next(error);
	}
};
