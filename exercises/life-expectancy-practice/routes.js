const express = require('express')
const routes = express.Router()
const User = require("./schema.js")

routes.get("/", (req, res, next) => {
    User.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

routes.post("/", (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, newSavedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedUser)
    })
})

routes.get("/:_id", (req, res, next) => {
    User.findOne({_id: req.params._id}, (err, User) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(User)
    })
})

routes.delete("/:_id", (req, res, next) => {
    User.findOneAndRemove({_id: req.params._id}, (err, UserToRemove) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(UserToRemove)
    })
})

routes.put("/:_id", (req, res, next) => {
    User.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedUser)
        }

    )
})

module.exports = routes