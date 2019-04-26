const mongoose = require('mongoose')
const morgan = require('morgan')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000

//middleware
app.use(express.json())
app.use(morgan('dev'))

//connect to mongoose
mongoose.connect("mongodb://localhost:27017/inventory", {useNewUrlParser: true}, () => {
    console.log("MongoDB is working")
})

//reference router
app.use("/inventory", require("./routes/inventoryRouter"))

//global error handler

app.listen(PORT, () => {
    console.log(`Port is running on port ${PORT}`)
})