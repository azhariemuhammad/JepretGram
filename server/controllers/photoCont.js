const Photo = require('../models/photo-schema')


const create = (req, res) => {
  console.log('req.file ', req.file)
  Photo.create({
    userId: req.body.userId,
    photo: req.file.cloudStoragePublicUrl,
    caption: req.body.caption,
    comments: [],
    votes: []
  })
  .then(data => {
    console.log('data di create', data)
    res.status(200).send(data)
  })
  .catch(err => {
    console.log('err', err)
    res.json(err)
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
    res.status(500).send(err)
  })
}

getPhotosByUserId = (req, res) => {
  Photo.find({userId: req.params.userid})
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

const comments = (req, res) => {
  Photo.findByIdAndUpdate({_id: req.params.id}, 
  {
    $push: { comments: {by: req.body.by, comment: req.body.comment} } 
  }, { new: true })
  .then(data => {
    console.log(data)
    res.status(200).send(data)
  })
  .catch(err => {
    console.log(err)
  })
}

const votes = (req, res) => {
  Photo.findByIdAndUpdate({_id: req.params.id},
  {
    $set: { votes: req.body.votes }
  }, { new: true })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

const unvote = (req, res) => {
  Photo.findByIdAndUpdate({ _id: req.params.id },
    {
      $pull: { votes: req.body.unvote }
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).json(err)
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
  comments,
  remove,
  votes,
  unvote,
  getPhotosByUserId
}