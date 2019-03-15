const mongoose = require('mongoose')

const Schema = mongoose.Schema


const UserSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    ghID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Users', UserSchema)