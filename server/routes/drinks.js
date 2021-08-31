const express = require('express')
const router = express.Router()
const userController = require('../controllers/drinksController')

router.get('/', userController.view)
router.post('/', userController.findByID)

module.exports = router