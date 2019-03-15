const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const unitsController = require('../controllers/unitsController')

router
    .get('/users/:ghID', (req, res) => {
        usersController.getUserById(req.params.ghID).then((user, err) => {
            res.status(200).send(`${user}`)
        })
    })
    .get('/users', (req,res) => {
        usersController.getAllUsers().then(users => {
            if (users.length > 0) {
                res.status(200).send(users)
            } else {
                res.status(204).send()
            }

        })
    })
    .delete('/users/:ghID', (req, res) => {
        usersController.deleteUserByGHID(req.params.ghID).then(user => {
            console.log(user)
            if (user) {
                res.status(201).send(`user #${req.params.ghID} successfully deleted`)
            } else {
                res.status(401).send('User not found')
            }
        })
    })

router
    .get('/units', unitsController.getAllUnits)
    .get('/units/:unitID', unitsController.getUnitByID)
    .post('/units', (req,res) => {
        unitsController.createNewUnit(req.body).then(unit => {
            res.status(200).json(unit)
        })
    })
    .delete('/units/:unitID', unitsController.deleteUnitByID)


module.exports = router