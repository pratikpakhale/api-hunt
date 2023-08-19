const AuthService = require('../services/auth')

const authService = new AuthService()

exports.authMiddleware = async (socket, next) => {
	try {
		const token = socket.handshake.auth.token
		const user = await authService.verifyToken(token)
		socket.user = user
		next()
	} catch (error) {
		next(error)
	}
}
