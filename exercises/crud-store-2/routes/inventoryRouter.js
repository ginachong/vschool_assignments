const express = require('express')
const mongoose = require('mongoose')
const inventoryRouter = express()
const Item = require("../models/itemSchema")

inventoryRouter.get("/", (req, res, next) => {
    Item.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Item (req.body)
    newItem.save((err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newItem)
    })
})

inventoryRouter.get("/:_id", (req, res, next) => {
    inventoryRouter.find((err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

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