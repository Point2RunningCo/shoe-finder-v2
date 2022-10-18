const mongoose = require('mongoose')

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Assortment: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('Brand', BrandSchema)