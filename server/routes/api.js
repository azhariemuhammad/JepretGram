const express = require('express')
const router = express.Router()
const photoController = require('../controllers/photoCont')
const userController = require('../controllers/user-Cont')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

router.post('/users', userController.createUser)

router.get('/users/:email', userController.findById)

router.put('/users/:id', userController.findByIdAndUpdate)

router.get('/users', userController.getAllUsers)

router.delete('/users/:id', userController.findByIdAndRemove)


// router.post('/photos', upload.single('gambar'), function (req, res, next) { 
//   if (!req.file) {
//     console.log("No file received");
//     return res.status(400).send({err:'error'})
//   } else {
//     console.log(req.file)
//     next()
//   }
//   // photoController.create
// })

router.post('/photos', photoController.create)

router.get('/photos', photoController.getAll)

router.put('/photos/:id', photoController.update)

router.delete('/photos', photoController.remove)

module.exports = router