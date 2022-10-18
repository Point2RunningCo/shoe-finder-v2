const Shoe = require('../models/Shoe')

module.exports = {
    getIndex: async (req, res) => {
        try {
            const neutralLight = await Shoe.find({ stability: "Neutral", cushion: "Light & Responsive" })
            const neutralMid = await Shoe.find({ stability: "Neutral", cushion: "Medium Cushion" })
            const neutralMax = await Shoe.find({ stability: "Neutral", cushion: "Max Cushion" })
            const stabilityLight = await Shoe.find({ stability: "Stability", cushion: "Light & Responsive" })
            const stabilityMid = await Shoe.find({ stability: "Stability", cushion: "Medium Cushion" })
            const stabilityMax = await Shoe.find({ stability: "Stability", cushion: "Max Cushion" })
            res.render('index.ejs', { neutralLight: neutralLight, neutralMid: neutralMid, neutralMax: neutralMax, stabilityLight: stabilityLight, stabilityMid: stabilityMid, stabilityMax: stabilityMax })
        } catch (err) {
            console.log(err)
        }
    }
}
