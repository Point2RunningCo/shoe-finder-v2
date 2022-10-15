const express = require('express')
const router = express.Router()
const shoeController = require('../controllers/shoe')


router.get('/', shoeController.getShoes)
router.get('/create', shoeController.getCreateShoe)
router.post('/create', shoeController.createShoe)
router.get('/:id', shoeController.getShoe)
router.put('/edit/:id', shoeController.editShoe)
router.delete('/delete/:id', shoeController.deleteShoe)

module.exports = router