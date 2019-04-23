const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crud', {useNewUrlParser: true}, () => {
    console.log("Connected to MongoDB")
})

app.use("/inventory", require("./routes/inventoryRouter"))



app.listen(PORT, (req, res, next) => {
    console.log(`Server is running on port ${PORT}`)
})