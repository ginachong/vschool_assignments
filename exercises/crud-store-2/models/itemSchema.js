const mongoose = require('mongoose')

const inventorySchema = {
    item: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    amountSold: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
        enum: ["household goods", "toys", "office supplies"]
    }
}

module.exports = mongoose.model("Inventory", inventorySchema)