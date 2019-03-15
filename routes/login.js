'use strict'
const express = require('express')
const passport = require('passport')
const router = express.Router()
const bcrypt = require('bcryptjs')
const secretToken = process.env.JWT_KEY
const jwt = require('jsonwebtoken')
require('dotenv').config()

const privateKey = process.env.JWT_PRIVATE_KEY
const publicKey = process.env.JWT_PUBLIC_KEY

const usersController = require('../controllers/usersController')

const appUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL : 'http://localhost:3000'


router
    .get('/github', passport.authenticate('github'))
    .get('/github/callback', passport.authenticate('github'), async (req, res) => {
        const { id: ghID, displayName } = req.user.profile

        let user = await usersController.getUserById(ghID)

        if (user.length === 0) {
            user = await usersController.newUserAtLogin({ displayName, ghID })
        }
        const token = jwt.sign(JSON.stringify(user[0]), privateKey)
        res.cookie('token',token).status(200).send(user[0])
    })


module.exports = router