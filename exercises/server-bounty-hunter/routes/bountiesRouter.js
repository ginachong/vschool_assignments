const express = require('express')
const bountiesRouter = express.Router()
const Bounty = require("../models/bountySchema.js")

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

bountiesRouter.get("/:_id", (req, res, next) => {
    Bounty.findOne({_id: req.params._id}, (err, bounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

bountiesRouter.delete("/:_id", (req, res, next) => {
    Bounty.findOneAndRemove({_id: req.params._id}, (err, bountyToRemove) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(bountyToRemove)
    })
})

bountiesRouter.put("/:_id", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }

    )
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