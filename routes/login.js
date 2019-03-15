'use strict'
const express = require('express')
const passport = require('passport')
const router = express.Router()
const bcrypt = require('bcryptjs')
const secretToken = process.env.JWT_KEY
const jwt = require('jsonwebtoken')

const privateKey = process.env.JWT_PRIVATE_KEY
const publicKey = process.env.JWT_PUBLIC_KEY

const usersController = require('../controllers/usersController')

const appUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL : 'http://localhost:3000'


router
    .get('/github', passport.authenticate('github'))
    .get('/github/callback', passport.authenticate('github'), (req, res) => {
        const { id: ghID, displayName } = req.user.profile
        usersController.getUserById(ghID).then((user) => {
            if (user.length !== 0) {
                res.status(200).send(user)
            } else {
                usersController.newUserAtLogin({displayName,ghID}).then(user => {
                    res.status(200).send(user)
                })
            }
        })
    })


module.exports = router