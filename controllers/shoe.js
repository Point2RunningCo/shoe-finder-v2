const Shoe = require('../models/Shoe')

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
            const shoe = await Shoe.findById(req.params.id)
            res.render('shoe.ejs', { shoe: shoe })
        } catch (err) {
            console.log(err)
        }
    },
    getCreateShoe: async (req, res) => {
        try {
            res.render('createShoe.ejs')
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