const express = require('express')
const app = express()


app.get("/hello", (req, res) => {
    res.send(hello)
})













app.listen(7000, () => {
    console.log("Server is running on port 7000")
})