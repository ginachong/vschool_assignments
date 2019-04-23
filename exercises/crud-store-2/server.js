const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

//middleware
app.use(express.json())
app.use(morgan('dev'))

//connect mongo
mongoose.connect("mongodb://localhost:27017/inventory", {useNewUrlParser: true}, () => {
    console.log("connected to DB")
})

//connect with router file
app.use("/inventory", require("./routes/inventoryRouter"))

app.listen(PORT, (req, res, next) => {
    console.log(`Server is running on port ${PORT}`)
})