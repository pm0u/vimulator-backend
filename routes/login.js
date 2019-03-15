'use strict'
const express = require('express')
const passport = require('passport')
const router = express.Router()
const bcrypt = require('bcryptjs')
const secretToken = process.env.JWT_KEY
const jwt = require('jsonwebtoken')

const privateKey = process.env.JWT_PRIVATE_KEY
const publicKey = process.env.JWT_PUBLIC_KEY

const appUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL : 'http://localhost:3000'


router
    .get('/github', passport.authenticate('github'))
    .get('/github/callback', passport.authenticate('github'), (req, res) => {
        const { id, displayName } = req.user.profile
        res.send(`${id}, ${displayName}`)
    })


module.exports = router