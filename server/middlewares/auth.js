const CError = require('../utils/CError')
const AuthService = require('../services/auth')


const authService = new AuthService()

exports.validateToken = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1]
		const decodedDetails = authService.verifyToken(token)
		req.user = decodedDetails
	} catch (error) {
		next(error)
	}
}
