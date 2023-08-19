const mongoose = require('mongoose')
require('dotenv').config()
const config = require('./config')

const { server } = require('./sockets/init')

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

