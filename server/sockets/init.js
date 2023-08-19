const { logs, maps, leaderboard } = require('../index')

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


