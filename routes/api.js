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
    .get('/users', (req, res) => {
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
            if (user.n > 0) {
                res.status(201).send(`user #${req.params.ghID} successfully deleted`)
            } else {
                res.status(401).send({ error: 'user not found', response: user })
            }
        })
    })

router
    .get('/units', unitsController.getAllUnits)
    .get('/units/:unitID', unitsController.getUnitByID)
    .post('/units', async (req, res) => {
        try {
            const newUnit = await unitsController.createNewUnit(req.body)
            res.status(200).send(newUnit)
        }
        catch (error) {
            res.status(500).send({ message: 'new unit not created', error })
        }
    })
    .delete('/units/:unitID', async (req, res) => {
        const deletedUnit = await unitsController.deleteUnitByID(req.params.unitID)

        if (deletedUnit.n > 0) {
            res.status(200).send(deletedUnit)
        } else {
            res.status(404).send({ error: 'unit does not exist', response: deletedUnit })
        }
    })


module.exports = router