process.env.NODE_ENV = process.env.NODE_ENV || 'development'

let stage = process.env.NODE_ENV
let envConfig = {}

if (stage === 'production') {
	// envConfig = require('./prod');
} else if (stage === 'testing') {
	// envConfig = require('./testing');
} else {
	// envConfig = require('./local');
}

module.exports = {
	env: process.env.NODE_ENV,
	port: 3000,
	secrets: {
		dbUrl: process.env.DATABASE_URL,
		googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
		googleClientId: process.env.GOOGLE_CLIENT_ID,
		redirectUrl: process.env.REDIRECT_URL,
		jwtSecret: process.env.JWT_SECRET,
	},
	...envConfig,
}
