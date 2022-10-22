const express = require('express')
const router = express.Router()
const togetController = require('../controllers/toget')

router.get('/', togetController.getItems)

router.post('/createItem', togetController.createItem)

router.put('/markComplete', togetController.markComplete)

router.put('/markIncomplete', togetController.markIncomplete)

router.delete('/deleteItem', togetController.deleteItem)

module.exports = router
