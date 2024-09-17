const mongoose = require("mongoose")

//create login model
const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
})

//model named as Login with schema
module.exports = mongoose.model("Register", registerSchema)