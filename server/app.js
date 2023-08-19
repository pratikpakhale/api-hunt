const express = require('express')
const cors = require('cors')

const morgan = require('morgan')

const router = require('./routes/router')
const errorHandler = require('./middlewares/errors')

const app = express()

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.use('/*', errorHandler.handle404)
app.use(errorHandler.handleError)

module.exports = app
