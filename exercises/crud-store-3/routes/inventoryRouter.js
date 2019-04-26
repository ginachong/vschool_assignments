const Item = require("../models/itemSchema.js")
const express = require('express')
const inventoryRouter = express()

//GET
inventoryRouter.get("/", (req, res, next) => {
    Item.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})


//POST
inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Item (req.body)
    newItem.save((err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(item)
    })
})


//GET ONE
inventoryRouter.get("/:_id", (req, res, next) => {
    Item.findOne({_id: req.params._id}, (err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})


//DELETE
inventoryRouter.delete("/:_id", (req, res, next) => {
    Item.findOneAndDelete(
        {_id: req.params._id}, 
        (err, item) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(202).send(item)
    })
})


//PUT
inventoryRouter.put("/:_id", (req, res, next) => {
    Item.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})


module.exports = inventoryRouter