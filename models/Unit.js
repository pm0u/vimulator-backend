const mongoose = require('mongoose')
const LessonSchema = require('./Lesson')

const Schema = mongoose.Schema

const UnitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lessons: {
        type: [LessonSchema],
        required: true
    }

})

module.exports = mongoose.model('Unit', UnitSchema)