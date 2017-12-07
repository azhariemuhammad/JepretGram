const express = require('express')
const router = express.Router()
const photoController = require('../controllers/photoCont')
const userController = require('../controllers/user-Cont')


router.post('/users', userController.createUser)

router.get('/users/:email', userController.findById)

router.put('/users/:id', userController.findByIdAndUpdate)

router.get('/users', userController.getAllUsers)

router.delete('/users/:id', userController.findByIdAndRemove)


router.post('/photos', photoController.create)

router.get('/photos', photoController.getAll)

router.put('/photos/:id', photoController.update)

router.delete('/photos', photoController.remove)

module.exports = router