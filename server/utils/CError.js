// Error class for handling errors in the controllers

module.exports = class CError extends Error {
	constructor(message, code) {
		super('Error Handler')
		this.text = message
		this.code = code
	}
}
