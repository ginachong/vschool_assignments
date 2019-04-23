const express = require('express')
inventoryRouter = express()
const InventoryItem = require("../models/InventorySchema.js")

inventoryRouter.get("/", (req, res, next) => {
    InventoryItem.find((err, items) => {        
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

inventoryRouter.post("/", (req, res, next) => {
    const newItem = new InventoryItem(req.body)
    newItem.save((err, newSavedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedItem)
    })
})

inventoryRouter.get("/:_id", (req, res, next) => {
    InventoryItem.find((err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

inventoryRouter.delete("/:_id", (req, res, next) => {
    InventoryItem.findOneAndRemove({_id: req.params._id}, (err, deletedItem) => {
        if(err){
            res.send(500)
            return next(err)
        }
        return res.status(202).send(deletedItem)
    })
})

inventoryRouter.put("/:_id", (req, res, next) => {
    InventoryItem.findOneAndUpdate(
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

