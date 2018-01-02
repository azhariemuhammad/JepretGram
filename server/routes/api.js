const express = require('express')
const router = express.Router()
const photoController = require('../controllers/photoCont')
const userController = require('../controllers/user-Cont')
var multer = require('multer')
const images = require('../helpers/images')

router.post('/users', userController.createUser)

router.get('/users/:email', userController.findById)

router.put('/users/:id', userController.findByIdAndUpdate)

router.get('/users', userController.getAllUsers)

router.delete('/users/:id', userController.findByIdAndRemove)


router.post('/photos', images.multer.single('file'), function (req, res, next) { 
  if (!req.file) {
    console.log("No file received");
    return res.status(400).send({err:'error'})
  } else {
    console.log(req.file)
    next()
  }
}, images.sendUploadToGCS, photoController.create)


router.get('/photos', photoController.getAll)

router.get('/photos/user/:userid', photoController.getPhotosByUserId)

router.put('/photos/comments/:id', photoController.comments)

router.put('/photo/vote/:id', photoController.votes)

router.put('/photo/unvote/:id', photoController.unvote)

router.delete('/photos/:id', photoController.remove)

module.exports = router