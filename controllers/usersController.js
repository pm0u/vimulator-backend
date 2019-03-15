const User = require('../models/User')

exports.createNewUser = (req, res) => {
    let newUser = new User(req.body)
    newUser.save((err, user) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(user)
        }
    })
}

exports.newUserAtLogin = ({ displayName, ghID }) => {
    let newUser = new User({ displayName, ghID })
    return newUser.save()
}

exports.getUserById = (ghID) => {
    return User.find({ghID})
}

exports.getAllUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(user)
        }
    })
}

exports.deleteUserByGHID = (ghID) => {
    return User.remove({ghID})
}