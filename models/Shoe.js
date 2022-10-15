const mongoose = require('mongoose')

const ShoeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: false
    },
    stability: {
        type: String,
        required: false
    },
    cushion: {
        type: String,
        required: false
    },
    mUrl: {
        type: String,
        required: false
    },
    wUrl: {
        type: String,
        required: false
    },
    mImg: {
        type: String,
        required: false
    },
    wImg: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Shoe', ShoeSchema)