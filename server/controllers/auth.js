const AuthService = require('../services/auth')
const CError = require('../utils/CError')

const authService = new AuthService()
exports.loginController = async (req, res, next) => {
	try {
		const { code } = req.query
		const userDetails = await authService.codeExchange(code)
		const token = await authService.login(userDetails)
		res.status(200).json({ token })
	} catch (error) {
		next(error)
	}
}

exports.signupController = async (req, res, next) => {
	try {
		const { code, team, badgrLink } = req.body
		const userDetails = await authService.codeExchange(code)
		if (!team || !badgrLink) {
			throw new CError('Team and BadgrLink is required to register', 400)
		}
		const token = await authService.signup({
			...userDetails,
			team,
			badgrLink,
		})
		res.status(200).json({ token })
	} catch (error) {
		next(error)
	}
}
