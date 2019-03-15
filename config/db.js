const mongoose = require('mongoose')

const dbURI = `${process.env.MONGODB_URI_PRE}${process.env.MONGODB_USER_ID}:${process.env.MONGODB_PW}${process.env.MONGODB_URI_POST}`

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