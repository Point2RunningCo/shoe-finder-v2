const express = require('express')
const router = express.Router()
const brandController = require('../controllers/brand')


router.get('/', brandController.getBrands)
router.get('/create', brandController.getCreateBrand)
router.post('/create', brandController.createBrand)
router.get('/:id', brandController.getBrand)
router.put('/edit/:id', brandController.editBrand)
router.delete('/delete/:id', brandController.deleteBrand)

module.exports = router