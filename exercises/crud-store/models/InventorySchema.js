const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    item: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("InventoryModel", inventorySchema)