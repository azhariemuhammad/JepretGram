const express = require('express')
const router = express.Router()
const photoController = require('../controllers/photoCont')

router.post('/photos', photoController.create)

router.get('/photos', photoController.getAll)

router.put('/photos/:id', photoController.update)

router.delete('/photos', photoController.remove)

module.exports = router