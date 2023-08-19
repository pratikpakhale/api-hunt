const CError = require('../utils/CError')

exports.validateToken = (req, res, next) => {
	try {
		const token = req.headers.Authorization.split(' ')[1]
		if (!token) {
			next(CError('Token is Absent', 401))
		}
		const decodedDetails = jwt.decode(token, config.secrets.jwtSecret)
		req.user = decodedDetails
	} catch (error) {
		next(CError('Unauthorized', 401))
	}
}
