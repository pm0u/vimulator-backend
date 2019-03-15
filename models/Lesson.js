const mongoose = require('mongoose')

const Schema = mongoose.Schema


const LessonSchema = new Schema({
   name: {
       type: String,
       required: true
   },
   cursorPos: {
       type: mongoose.Mixed,
       required:true
   },
   finishCond:{
       type: mongoose.Mixed,
       required: true
   },
   keys: {},
   lessonText: {
       type: Array,
       required: true
   },
   hints: {
       title: {
           type: String,
           required: true
       },
       text: {
           type: Array,
           required: true
       },
       additional:[Array],
       resources: [Array]
   }
})

module.exports = LessonSchema