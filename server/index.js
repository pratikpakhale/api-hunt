const mongoose = require('mongoose')
const http = require('http')
const Server = require('socket.io').Server
require('dotenv').config()
const config = require('./config')

const app = require('./app')

const server = http.createServer(app)

const io = new Server(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
		allowedHeaders: ['Authorization'],
	},
	cleanupEmptyChildNamespaces: true,
})

server.listen(config.port, () => {
	console.log(`Server listening on ${config.port}`)
	mongoose
		.connect(config.secrets.dbUrl, {
			useNewUrlParser: true,
		})
		.then(() => {
			console.log('Connected to MongoDB')
		})
		.catch((error) => {
			console.log('Error connecting MongoDB')
		})
})

module.exports = io
