const Brand = require('../models/Brand')

module.exports = {
    getBrands: async (req, res) => {
        try {
            const brandItems = await Brand.find()
            res.render('brands.ejs', { brands: brandItems })
        } catch (err) {
            console.log(err)
        }
    },
    getBrand: async (req, res) => {
        try {
            const brand = await Brand.findById(req.params.id)
            res.render('brand.ejs', { brand: brand })
        } catch (err) {
            console.log(err)
        }
    },
    getCreateBrand: async (req, res) => {
        try {
            res.render('createBrand.ejs')
        } catch (err) {
            console.log(err)
        }
    },
    createBrand: async (req, res) => {
        try {
            await Brand.create({
                name: req.body.name
            })
            console.log('Brand has been added!')
            res.redirect('/brands')
        } catch (err) {
            console.log(err)
        }
    },
    editBrand: async (req, res) => {
        try {
            await Brand.findOneAndUpdate(
                { _id: req.params.id },
                {
                    name: req.body.name
                })
            console.log('Brand has been edited!')
            res.redirect('/brands')
        } catch (err) {
            console.log(err)
        }
    },
    deleteBrand: async (req, res) => {
        try {
            const brand = await Brand.findOneAndDelete({ _id: req.params.id })
            console.log('Brand deleted!')
            res.redirect('/brands')
        } catch (err) {
            console.log(err)
        }
    },
}