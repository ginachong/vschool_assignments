const express = require('express')
const app = express()
const morgan = require('morgan')
const uuid = require('uuid/v4')

app.use(express.json())
app.use(morgan('dev'))


//next = move on to the next process
app.use((req, res, next) => {
    console.log("first")
    next()
})

app.use((req, res, next) => {
    console.log("second")
    next()
})

app.use("/turtles", require('./routes/turtleRoutes.js'))



app.listen(7000, () => {
    console.log("Port 7000 is running the server")
})

