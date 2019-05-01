const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    smoke: {
        type: Boolean,
        required: true,
        enum: [true, false]
    },
    drink: {
        type: String,
        required: true,
        enum: ['0-5', '5-10', '10-18', '18+']
    },
    exercise: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema)