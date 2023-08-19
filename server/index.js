const mongoose = require('mongoose')
const http = require('http')
const { Server } = require('socket.io')
const { instrument } = require('@socket.io/admin-ui')
require('dotenv').config()
const config = require('./config')

const app = require('./app')

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

const map = io.of('/maps')
const leaderboard = io.of('/leaderboard')
const logs = io.of('/logs')

instrument(io, {
	auth: false,
	mode: 'development',
})

server.listen(config.port, () => {
	console.log(`Server listening on ${config.port}`)
	mongoose
		.connect(config.secrets.dbUrl, {
			useNewUrlParser: true,
		})
		.then(() => {
			console.log('Connected to MongoDB')
			console.log('Sockets AdminDashboard: https://admin.socket.io')
		})
		.catch((error) => {
			console.log('Error connecting MongoDB')
		})
})

module.exports = { map, leaderboard, logs }
