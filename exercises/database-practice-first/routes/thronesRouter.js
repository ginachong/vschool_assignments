const express = require('express')
const throneRouter = express.Router()
const Character = require('../models/character.js')

throneRouter.get("/", (req, res, next) => {
    Character.find((err, characters) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(characters)
    })
})

throneRouter.post("/", (req, res, next) => {
    const newCharacter = new Character(req.body)
    newCharacter.save((err, newSavedCharacter) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedCharacter)
    })
})

//Get ONE

throneRouter.get("/:_id", (req, res, next) => {
    Character.findOne({_id: req.params._id}, (err, character) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(character)
    })
})

//DELETE

throneRouter.delete("/:_id", (req, res, next) => {
    Character.findOneAndRemove({_id: req.params._id}, (err, deletedCharacter) => {
        if(err){
            releaseEvents.status(500)
            return next(err)
        }
        return res.status(202).send(deletedCharacter)
    })
})

//UPDATE - PUT

throneRouter.delete("/:_id", (req, res, next) => {
    Character.findOneAndUpdate(
        {_id: req.params._id},             //Find character by id
        req.body,                           //Update char with this object
        {new: true},                        //send back the new character after update
        (err, updatedCharacter) => {
        if(err){
            releaseEvents.status(500)
            return next(err)
        }
        return res.status(201).send(updatedCharacter)
    })
})





module.exports = throneRouter