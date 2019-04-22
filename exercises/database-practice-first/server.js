const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 7000
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))


//Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/got-characters", {useNewUrlParser: true}, () => {
    console.log("connected to the DB")
})


app.use("/characters", require('./routes/thronesRouter.js'))


//Global Server Error Handler -- handles ANY thrown error from ANY of the routes above

app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})



app.listen(PORT, () => {
    console.log(`port is running on port ${PORT}`)
})