const mongoose = require("mongoose")

//create login model
const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
    }
})

//model named as Login with schema
module.exports = mongoose.model("Login", loginSchema)