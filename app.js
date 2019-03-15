const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')

const loginRouter = require('./routes/login')
const apiRouter = require('./routes/api')

require('dotenv').config()

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(passport.initialize())
require('./config/passport-github')
require('./config/db')

app.use('/login', loginRouter)
app.use('/api', apiRouter)

module.exports = app
