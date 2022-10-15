const mongoose = require('mongoose')

const ShoeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    stability: {
        type: String,
        required: true
    },
    cushion: {
        type: String,
        required: true
    },
    mUrl: {
        type: String,
        required: true
    },
    wUrl: {
        type: String,
        required: true
    },
    mImg: {
        type: String,
        required: true
    },
    wImg: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Model', modelSchema)