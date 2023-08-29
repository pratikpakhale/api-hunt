const AuthService = require('../services/auth');
const CError = require('../utils/CError');

const authService = new AuthService();

exports.signin = async (req, res, next) => {
	try {
		const { code, team, badgrLink } = req.body;
		if (!team || !badgrLink) {
			throw new CError('Team and BadgrLink is required to register', 400);
		}
		const userDetails = await authService.codeExchange(code);
		const token = await authService.signup({
			...userDetails,
			team,
			badgrLink,
		});
		res.status(200).json({ token });
	} catch (error) {
		next(error);
	}
};

exports.createTeam = async (req, res, next) => {
	try {
		if ((req, user.team)) {
			throw new CError('Team already joined', 400);
		}
	} catch (error) {
		next(error);
	}
};
exports.joinTeam = async (req, res, next) => {
	try {
		if (req.user.team) {
			throw new CError('Team already joined', 400);
		}
		const { team } = req.body;
	} catch (error) {
		next(error);
	}
};
