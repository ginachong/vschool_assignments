//Mongoose Schema for our character

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const charactersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    house: {
        type: String,
        required: true,
        enum: ["Winterfell", "Tarley", "Lannister"]
    },
    isAlive: {
        type: Boolean,
        default: true
    }
})


module.exports = mongoose.model("Character", charactersSchema)
//-----> model name // model blueprint

