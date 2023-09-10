const google = require('googleapis').google;
const axios = require('axios');
const jwt = require('jsonwebtoken');

const config = require('../config');
const CError = require('../utils/CError');

const User = require('../models/user');

class AuthService {
	async signin(userDetails) {
		let token;
		const checkUser = await User.findOne({ email: userDetails.email });
		if (!checkUser) {
			const newUser = new User(userDetails);
			await newUser.save().catch((error) => {
				if (error.name === 'ValidationError') {
					throw new CError(
						'Validation Error : name,email,profileImage is missing',
						400,
					);
				}
			});
			token = this.generateToken(newUser._id, undefined, '1d');
			return { message: 'New user created join a team', token, code: 201 };
		}
		if (!checkUser.team) {
			token = this.generateToken(checkUser._id, undefined, '1d');
			return { message: 'The user has not joined a team', token, code: 201 };
		}
		token = this.generateToken(newUser._id, newUser.team);
		return { message: 'Successfully logged in', token, code: 200 };
	}

	async codeExchange(code) {
		if (!code) {
			throw new CError('Code parameter is required', 400);
		}
		const oauth2Client = new google.auth.OAuth2(
			config.secrets.googleClientId,
			config.secrets.googleClientSecret,
			config.secrets.redirectUrl,
		);
		const { tokens } = await oauth2Client.getToken(code);
		const { access_token } = tokens;
		const userInfo = await axios.get(
			'https://people.googleapis.com/v1/people/me?personFields=emailAddresses,photos,names',
			{ headers: { Authorization: `Bearer ${access_token}` } },
		);
		const name = userInfo.data.names.find(
			(name) => name.metadata.primary === true,
		)?.displayName;
		const profileImage = userInfo.data.photos.find(
			(photo) => photo.metadata.primary === true,
		)?.url;
		const email = userInfo.data.emailAddresses.find(
			(email) => email.metadata.primary === true,
		)?.value;
		return {
			name,
			profileImage,
			email,
		};
	}

	async generateToken(userId, teamId, expiry = '7d') {
		const token = jwt.sign({ userId, teamId }, config.secrets.jwtSecret, {
			expiresIn: expiry,
		});
		return token;
	}

	async verifyToken(token) {
		if (!token) {
			throw new CError('Token is Absent', 401);
		}
		const decodedDetails = jwt.decode(token, config.secrets.jwtSecret);
		return decodedDetails;
	}
}

module.exports = AuthService;
