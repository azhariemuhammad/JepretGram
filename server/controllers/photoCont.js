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
  .populate('userId')
  .populate({ path: 'comments.by', select: 'username' })
  .populate({ path: 'following', select: 'username' })
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
  .populate('userId')
  .populate('userId.followers')
  .populate({path: 'userId.following', select: 'username'})
  .then(data => {
    console.log(data, '0i--0-0')
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
    data.populate('userId')
    data.populate('comments.by')
    .execPopulate()
    .then(data => {
      console.log(data)
      res.status(200).send(data)
    })
    .catch(err => res.json(err))
    // data.populate('comments.by', function (err, result) {
    //   if (!err) {
    //     console.log(data)
    //     res.status(200).send(data)
    //   }
    // })
  })
  .catch(err => {
    console.log(err)
  })
}

const removeComments = (req, res) => {
  Photo.findByIdAndUpdate({_id: req.params.id}, 
  {
    $pull: { comments: { by: req.body.by, comment: req.body.comment }}
  }, {new: true})
  .then(data => {
    data.populate('userId', function (err, result) {
      if (!err) {
        console.log(data)
        res.status(200).send(data)
      }
    })
  })
  .catch(err => {
    console.log(err)
  })
}

const votes = (req, res) => {
  Photo.findByIdAndUpdate({_id: req.params.id},
  {
    $addToSet: { votes: req.body.votes }
  }, { new: true })
  .then(data => {
    data.populate('userId', function (err, result) {
      if (!err) {
        console.log(data)
        res.status(200).send(data)
      }
    })
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

const unvote = (req, res) => {
  Photo.findByIdAndUpdate({ _id: req.params.id },
    {
      $pull: { votes: req.body.unvotes }
    }, { new: true })
    .then(data => {
      data.populate('userId', function (err, result) {
        if (!err) {
          console.log(data)
          res.status(200).send(data)
        }
      })
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
  removeComments,
  remove,
  votes,
  unvote,
  getPhotosByUserId
}