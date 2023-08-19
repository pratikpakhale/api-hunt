const google = require('googleapis').google
const axios = require('axios')
const jwt = require('jsonwebtoken')

const config = require('../config')
const CError = require('../utils/CError')

const User = require('../models/user')

class AuthService {
	async login(email) {
		const user = await User.findOne({ email })
		if (!user) {
			throw new CError('User does not exist', 404)
		}
		const token = this.generateToken(user._id, user.team)
		return token
	}

	async signup(userDetails) {
		const newUser = new User(userDetails)
		await newUser.save().catch((error) => {
			if (error.code === 11000) {
				throw new CError('User already exists or the BadgrLink is copied')
			}
			if (error.name === 'ValidationError') {
				throw new CError(
					'Validation Error : name,email,profileImage is missing',
					400,
				)
			}
		})
		const token = this.generateToken(newUser._id, newUser.team)
		return token
	}

	async codeExchange(code) {
		if (!code) {
			throw new CError('Code parameter is required', 400)
		}
		const oauthClient = new google.auth.OAuth2(
			config.secrets.googleClientId,
			config.secrets.googleClientSecret,
			config.secrets.redirectUrl,
		)
		const { tokens } = await oauth2Client.getToken(code)
		const { access_token } = tokens
		const userInfo = await axios.get(
			'https://people.googleapis.com/v1/people/me?personFields=emailAddresses,photos,names',
			{ headers: { Authorization: `Bearer ${access_token}` } },
		)
		const name = userInfo.data.names.find(
			(name) => name.metadata.primary === true,
		)?.displayName
		const profileImage = userInfo.data.photos.find(
			(photo) => photo.metadata.primary === true,
		)?.url
		const email = userInfo.data.emailAddresses.find(
			(email) => email.metadata.primary === true,
		)?.value
		return {
			name,
			profileImage,
			email,
		}
	}

	async generateToken(userId, teamId) {
		const token = jwt.sign({ userId, teamId }, config.secrets.jwtSecret, {
			expiresIn: '7d',
		})
		return token
	}
}

module.exports = AuthService
