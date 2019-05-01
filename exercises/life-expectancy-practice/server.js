const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true}, () => {
    console.log("connected to the DB")
})

app.use("/users", require('./routes.js'))

//Global Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log("it's working")
})