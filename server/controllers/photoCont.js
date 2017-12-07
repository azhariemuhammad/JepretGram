const Photo = require('../models/photo-schema')


const create = (req, res) => {
  Photo.create({
    // userId: req.body.userId,
    photo: req.body.url
  })
  .then(data => {
    console.log('data di create', data)
    res.status(200).send(data)
  })
  .catch(err => {
    console.log('err')
  })
}

const getAll = (req, res) => {
  Photo.find()
  .then(data => {
    console.log('data di getall', data)
    res.status(200).send(data)
  })
  .catch(err => {
    console.log(err)
  })
}

const update = (req, res) => {
  Photo.findByIdAndUpdate({_id: req.params.id}, {
    userId: req.body.userId,
    url: req.body.url,
    photo: req.body.photo
  }, {new : true})
  .then(data => {
    console.log(data)
    res.status(200).send(data)
  })
  .catch(err => {
    console.log(err)
  })
}

const remove = (req, res) => {
  Photo.findByIdAndRemove({ _id: req.params.id})
  .then(data => {
    console.log(data)
    res.status(200).send(data)
  })
  .catch(err => {
    console.log(err)
  })
}
module.exports = {
  create,
  getAll,
  update,
  remove
}