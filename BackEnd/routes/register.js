const express = require("express")
const router = express.Router()
const Register = require("../models/register")
const bcrypt = require("bcrypt")

//creating restAPIs for Register

//get all registered users
router.get("/", async (req, res) => {
    try {
        const login = await Register.find()
        res.json(login)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Create Register 
router.post("/", async (req, res) => {
    try {
        const user = await Register.find({})
        const email = user.find((user) => user.email === req.body.email);
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        if (email) {
            res.status(201).json("email already exists")
        } else {
            const register = new Register({ name: req.body.name, email: req.body.email, password: hashedPassword })
            const newLoginUser = await register.save()
            res.status(201).json(newLoginUser)
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router