// const express = require("express")
// const router = express.Router()
// const Login = require("../models/login")
// const bcrypt = require("bcrypt")

// //creating restAPIs for login
// //get all login users
// router.get("/", async (req, res) => {
//     try {
//         const login = await Login.find()
//         res.json(login)
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

// //Create login user
// router.post("/", async (req, res) => {
//     try {
//         //we can pass 10 instead salt
//         //const salt = await bcrypt.genSalt()
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         const login = new Login({ name: req.body.name, password: hashedPassword })
//         const newLoginUser = await login.save()
//         res.status(201).json(newLoginUser)
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

// //login user check
// router.post("/users", async (req, res) => {
//     const user = await Login.find({})
//     const userName = user.find((user) => user.name === req.body.name);

//     if (userName == null) {
//         return res.status(400).send("cannot find user")
//     }

//     try {
//         if (await bcrypt.compare(req.body.password, userName.password)) {
//             res.status(201).json("success")
//         } else {
//             res.status(201).json("user not found")
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

// module.exports = router
