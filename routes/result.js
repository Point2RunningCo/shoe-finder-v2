const express = require('express')
const router = express.Router()
const resultController = require('../controllers/result')

router.get('/', resultController.getResults)

module.exports = router