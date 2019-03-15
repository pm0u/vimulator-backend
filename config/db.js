const mongoose = require('mongoose')

const dbURI = 'mongodb+srv://admin:0wn4g311@cluster0-gcwnj.gcp.mongodb.net/test?retryWrites=true'

const options = {
    useNewUrlParser: true
}

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
)


require('../models/test')