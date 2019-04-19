const express = require('express')
const turtleRouter = express.Router()
const uuid = require('uuid/v4')

const ninjaTurtles = [
    {
        name: "Michaelangelo",
        weapon: "nunchucks",
        killCount: 132,
        _id: uuid()
    },
]

turtleRouter.get("/", (req, res) => {
    res.status(200)
    res.send(ninjaTurtles)
})

//get ONE ---> you are sending back one resource
  //app.get is route and the url is the endpoint??
turtleRouter.get("/:id", (req, res) => {
    const foundTurtle = ninjaTurtles.find(turtle => turtle._id === req.params._id)
    res.status(200)
    res.send(foundTurtle)
})

//Insert One - POST
turtleRouter.post("/", (req, res) => {
    const newTurtle = req.body
    newTurtle._id = uuid()
    ninjaTurtles.push(newTurtle)
    res.status(201)
    res.send(ninjaTurtles)
})

//Get all by query
  //needs a unique endpoint because otherwise the query will
  //match with the above enpoint and run that one.
  //---> may need a switch statment to handle whatever
  //parameters the user sends (it may not be killCount)
turtleRouter.get("/search", (req, res) => {
    const killCount = req.query.killCount
    const filteredTurtles = ninjaTurtles.filter(turtle => {
        if(turtle.killCount >= killCount){
            return turtle
        }
        res.status(200)
        res.send(filteredTurtles)
    })
})


module.exports = turtleRouter