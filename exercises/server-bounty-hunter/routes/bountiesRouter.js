const express = require('express')
const bountiesRouter = express.Router()
const Bounty = require("../models/bountySchema.js")

// let bounties = [
//     {
//         firstName: "Uncle",
//         lastName: "Owen",
//         living: false,
//         bountyAmount: 1000,
//         type: "Jedi",
//         _id: uuidv4(),
//     },
//     {
//         firstName: "Ewan",
//         lastName: "McGregor",
//         living: true,
//         bountyAmount: 50000,
//         type: "Jedi",
//         _id: uuidv4(),
//     },
//     {
//         firstName: "Yoda",
//         lastName: "",
//         living: false,
//         bountyAmount: 1000000,
//         type: "Jedi",
//         _id: uuidv4(),
//     },
//     {
//         firstName: "Darth",
//         lastName: "Sidious",
//         living: false,
//         bountyAmount: 50000,
//         type: "Sith",
//         _id: uuidv4(),
//     },
//     {
//         firstName: "hot",
//         lastName: "guy",
//         living: true,
//         bountyAmount: 1000000,
//         type: "Sith",
//         _id: uuidv4(),
//     },
// ]

bountiesRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountiesRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, newSavedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedBounty)
    })
})

// bountiesRouter.delete("/bounties/:_id", (req, res) => {
//     const bountyToDelete = bounties.find(bounty => bounty._id === req.params._id)
//     const newBounties = bounties.filter(bounty => bounty._id !== bountyToDelete._id)
//     bounties = newBounties
//     res.send(bounties)
// })

// bountiesRouter.put("/bounties/:_id", (req, res) => {
//     const bountyToEdit = bounties.find(bounty => bounty._id === req.params._id)
//     const updatedBounty = Object.assign(bountyToEdit, req.body)
//     const updatedDB = bounties.map(bounty => bounty._id === updatedBounty._id ? updatedBounty : bounty) //I don't have to say bounty = updatedBounty?
//     bounties = updatedDB
//     res.send(bounties)
// })

module.exports = bountiesRouter 