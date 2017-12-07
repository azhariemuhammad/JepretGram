const Photo = require('../models/photo-schema')


const create = (req, res) => {
  Photo.create({
    userId: req.body.userId,
    photo: req.body.url
  })
  .then(data => {
    console.log('data di create', data)
    res.status(200).send
  })
}