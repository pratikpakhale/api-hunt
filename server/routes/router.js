const router = require('express').Router()

const authRouter = require('./auth')

router.use('/ping', (req, res) => {
	res.status(200).json({ message: 'pong' })
})

router.use('/auth', authRouter)

module.exports = router
