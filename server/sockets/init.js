const http = require('http')
const { Server } = require('socket.io')
const { instrument } = require('@socket.io/admin-ui')
const app = require('../app')
const { authMiddleware } = require('./middlewares')

const server = http.createServer(app)

const io = new Server(server, {
	transports: ['websocket', 'polling', 'flashsocket'],
	cors: {
		origin: 'https://admin.socket.io',
		methods: ['GET', 'POST'],
		allowedHeaders: [
			'Authorization',
			'Access-Control-Allow-Origin',
			'Content-Type',
		],
		credentials: true,
	},
	cleanupEmptyChildNamespaces: true,
})

instrument(io, {
	auth: false,
	mode: 'development',
})

const maps = io.of('/maps')
const leaderboard = io.of('/leaderboard')
const logs = io.of('/logs')

logs.on('connection', (socket) => {
	try {
		console.log('New client connected to /logs')
	} catch (error) {
		console.log(error)
	}
})

maps.on('connection', (socket) => {
	try {
		console.log('New client connected to /maps')
	} catch (error) {
		console.log(error)
	}
})

leaderboard.on('connection', (socket) => {
	try {
		console.log('New client connected to /leaderboard')
	} catch (error) {
		console.log(error)
	}
})

maps.use((socket, next) => {
	authMiddleware(socket, next)
})

leaderboard.use((socket, next) => {
	authMiddleware(socket, next)
})

logs.use((socket, next) => {
	authMiddleware(socket, next)
})

module.exports = { maps, leaderboard, logs, server }
