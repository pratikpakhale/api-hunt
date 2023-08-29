const CError = require('../utils/CError');
const AuthService = require('../services/auth');

const authService = new AuthService();

exports.validateToken = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const decodedDetails = await authService.verifyToken(token);
		if (!decodedDetails.team) {
			throw new CError('Team not joined by the user', 401);
		}
		req.user = decodedDetails;
	} catch (error) {
		next(error);
	}
};
