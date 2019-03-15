const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router
    .get('/users/:ghID', (req, res) => {
        usersController.getUserById(req.params.ghID).then((user, err) => {
            res.status(200).send(`${user}`)
        })
    })
    //.post('/users', usersController.createNewUser)
    .get('/users', usersController.getAllUsers)
    .delete('/users/:ghID', (req, res) => {
        usersController.deleteUserByGHID(req.params.ghID).then(user => {
            if (user) {
                res.status(201).send(`user #${req.params.ghID} successfully deleted`)
            } else {
                res.status(401).send('User not found')
            }
        })
    })


module.exports = router