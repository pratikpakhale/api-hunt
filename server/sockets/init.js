const io = require('../index')
const AuthService = require('../services/auth')

const authService = new AuthService()

io.on('connection', (socket) => {
	console.log('New client connected')
})

io.on('disconnect', () => {
	console.log('Client disconnected')
})

const maps = io.of('/maps')

const leaderboard = io.of('/leaderboard')

maps.on('connection', (socket) => {
	try {
		console.log('New client connected to /maps')
		const token = socket.handshake.headers.authorization?.split(' ')[1]
    const decodedDetails = authService.verifyToken(token)
	} catch (error) {
		console.log(error)
	}
})

leaderboard.on('connection', (socket) => {
	try {
		console.log('New client connected to /leaderboard')
		const token = socket.handshake.headers.authorization?.split(' ')[1]
    const decodedDetails = authService.verifyToken(token)
	} catch (error) {
		console.log(error)
	}
})
