//using express server 
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
require('dotenv').config()
// const path = require('path');
const app = express();
const port = 3001

//connect DB
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("connected to database"))

//use cors
app.use(cors())
app.use(express.json())

// app.get('/api', (req, res) => {
//     res.json({ message: 'Hello from Node.js!' });
// });

//routes file setup
const subscribersRouter = require("./routes/subscribers")
app.use('/subscribers', subscribersRouter)

//routes for login
const loginRouter = require("./routes/login")
app.use("/login", loginRouter)

//to check the frontend build 
// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

//listen to the port
app.listen(port, function (error) {
    if (error) {
        console.log("something went wrong", error)
    } else {
        console.log("server is listening", port)
    }
})

