const express = require('express')
const router = express.Router()
const testController = require('../controllers/testController')

router
    .get('/tests', testController.listAllTests)
    .post('/tests', testController.createNewTest)


module.exports = router