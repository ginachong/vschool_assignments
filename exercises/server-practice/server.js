const express = require('express')
const app = express()
const uuidv4 = require("uuid/v4")

//Fake Database

let wizards = [
    {
        name: "Harry Potter",
        age: 16,
        isGood: true,
        favClasses: ["Potions", "Defense Against the Dark Arts", "Quidditch"],
        house: "Gryffindor",
        _id: uuidv4()
    },
    {
        name: "Bellatrix Lestrange",
        age: 40,
        isGood: false,
        favClasses: ["forbidden spells", "dark magic", "killing good guys"],
        house: "Gryffindor",
        _id: uuidv4()
    },
]

//Middlewares that fire for every request
app.use(express.json())

//Routes - Endpoints
//GET ALL
app.get("/wizards", (req, res) => {
    res.send(wizards)
})

//GET ONE ----> :_id is a parameter so you use req.params

// app.get("/wizards/:_id", (req, res) => {
//     console.log(req.params._id)
//     const foundWizard = wizards.find(wizard => wizard._id === req.params._id)
// })

//-----> didn't work because the id parameter is expecting a string. 
//THis works:

app.get("/wizards/:_id", (req, res) => {
    console.log(req.params._id)
    const foundWizard = wizards.find(wizard => wizard._id === Number(req.params._id))
    res.send(foundWizard)
})

//OR you could make the ids strings 
//OR you could set the === to ==

//POST - insert one
app.post("/wizards", (req, res) => {
    const newWizard = req.body
    newWizard._id = uuidv4()
    wizards.push(newWizard)
    res.send(wizards)
})

//DELETE - delete one
app.delete("/wizards/:_id", (req, res) => {
    //find the wizard to delete
    const deleteWizard = wizards.find(wizard => wizard._id === req.params._id)
    //remove wizard from array
    const updatedDB = wizards.filter(wizard => wizard._id !== deleteWizard._id)
    //reassign database to updated array
    wizards = updatedDB
    res.send(wizards)
})

//PUT
app.put("/wizards/:_id", (req, res) => {
    const wizardToUpdate = wizards.find(wizard => wizard._id === req.params._id)
    const updatedWizard = Object.assign(wizardToUpdate, req.body)
    const updatedDB = wizards.map(wizard => wizard._id === updatedWizard._id ? updatedWizard : wizard)
    wizards = updatedDB;
    res.send(wizards)
})



app.listen(7000, () => {
    console.log("Server is running on Port 7000")
})

