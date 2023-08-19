const { maps, leaderboard, logs } = require('../index')
const AuthService = require('../services/auth')

const authService = new AuthService()

maps.use((socket, next) => {
	try {
		const token = socket.handshake.headers.authorization?.split(' ')[1]
		authService.verifyToken(token)
		next()
	} catch (error) {
		next(error)
	}
})

leaderboard.use((socket, next) => {
	try {
		const token = socket.handshake.headers.authorization?.split(' ')[1]
		authService.verifyToken(token)
		next()
	} catch (error) {
		next(error)
	}
})

logs.use((socket, next) => {
	try {
		const token = socket.handshake.headers.authorization?.split(' ')[1]
		authService.verifyToken(token)
		next()
	} catch (error) {
		next(error)
	}
})
