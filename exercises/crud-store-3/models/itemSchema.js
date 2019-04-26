const mongoose = require('mongoose')
const Schema = mongoose.Schema


const itemSchema = new Schema ({
    itemName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true,
    }
})

module.exports = mongoose.model("Item", itemSchema)