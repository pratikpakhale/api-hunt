exports.handle404 = (req, res) => {
	res.status(404).json({ message: 'Not Found' })
}

exports.handleError = (err, req, res) => {
	console.log(err)
	res
		.status(err.code || 500)
		.json({ message: err.text || 'Internal Server Error' })
}
