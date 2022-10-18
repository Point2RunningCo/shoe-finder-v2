const Shoe = require('../models/Shoe')
const Brand = require('../models/Brand')

module.exports = {
    getShoes: async (req, res) => {
        try {
            const shoeItems = await Shoe.find()
            res.render('shoes.ejs', { shoes: shoeItems })
        } catch (err) {
            console.log(err)
        }
    },
    getShoe: async (req, res) => {
        try {
            const brandItems = await Brand.find().sort({ name: 1 })
            const shoe = await Shoe.findById(req.params.id)
            res.render('shoe.ejs', { shoe: shoe, brands: brandItems })
        } catch (err) {
            console.log(err)
        }
    },
    getCreateShoe: async (req, res) => {
        try {
            const brandItems = await Brand.find().sort({ name: 1 })
            res.render('createShoe.ejs', { brands: brandItems })
        } catch (err) {
            console.log(err)
        }
    },
    createShoe: async (req, res) => {
        try {
            await Shoe.create({
                name: req.body.name,
                brand: req.body.brand,
                stability: req.body.stability,
                cushion: req.body.cushion,
                mUrl: req.body.mUrl,
                wUrl: req.body.wUrl,
                mImg: req.body.mImg,
                wImg: req.body.wImg,
                description: req.body.description
            })
            await Brand.findOneAndUpdate({ name: req.body.brand }, { $push: { assortment: req.body.name } })
            console.log(req.body.brand)
            console.log('Shoe has been added!')
            res.redirect('/shoes')
        } catch (err) {
            console.log(err)
        }
    },
    editShoe: async (req, res) => {
        try {
            await Shoe.findOneAndUpdate(
                { _id: req.params.id },
                {
                    name: req.body.name,
                    brand: req.body.brand,
                    stability: req.body.stability,
                    cushion: req.body.cushion,
                    mUrl: req.body.mUrl,
                    wUrl: req.body.wUrl,
                    mImg: req.body.mImg,
                    wImg: req.body.wImg,
                    description: req.body.description
                })
            await Brand.findOneAndUpdate({ name: req.body.brand }, { assortment: req.body.name })
            console.log('Shoe has been edited!')
            res.redirect('/shoes')
        } catch (err) {
            console.log(err)
        }
    },
    deleteShoe: async (req, res) => {
        try {
            const shoe = await Shoe.findOneAndDelete({ _id: req.params.id })
            console.log('Shoe deleted!')
            res.redirect('/shoes')
        } catch (err) {
            console.log(err)
        }
    },
}