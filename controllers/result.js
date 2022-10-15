const Shoe = require('../models/Shoe')

module.exports = {
    getResults: async (req, res) => {
        try {
            const shoeItems = await Shoe.find()
            res.render('results.ejs', { shoes: shoeItems })
        } catch (err) {
            console.log(err)
        }
    }
}