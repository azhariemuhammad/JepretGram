const User = require('../models/user-schema')
const findOrCreate = require('mongoose-find-or-create')

let message = ''

const createUser = (req, res) => {
  User.findOrCreate({username: req.body.username},{
    email: req.body.email
  }, (err, result) => {
    if (!err) {
      message = 'Succes Create One Data'
      res.status(200).send({ user: result, msg: message })
    } else {
      res.json(err)
    }
  })
}

const getAllUsers = (req, res) => {
  User.find()
    .then(users => {
      res.status(200).send(users)
    })
    .catch(err => {
      console.log('err')
    })
}

const findById = (req, res) => {
  User.find({ _id: req.params.id })
    .then(user => {
      res.status(200).send(user)
    })
    .catch(err => {
      console.log(err)
    })
}

const follow = (req, res, next) => {
  console.log(req.query.username)
  User.findByIdAndUpdate({ _id: req.params.id }, {
    $addToSet: { following: req.query.username }
  }, { new: true })
  .then(user => {
    console.log(user, 'opopopopo')
    req.body.followers = user.username
    next()
  })
  .catch(err => {
    console.log(err)
  })
}
const followers = (req, res) => {
  console.log(req.query.username)
  User.update({ username: req.query.username }, {
    $addToSet: { followers: req.body.followers }
  }, { new: true })
  .then(user => {
    console.log(user, 'opopopopo')
    res.json(user)
  })
  .catch(err => {
    console.log(err)
  })
}

const findByIdAndRemove = (req, res) => {
  User.findByIdAndRemove({ _id: req.params.id })
    .then(user => {
      res.status(200).send(user)
    })
    .catch(err => {
      console.log(err)
    })
}



module.exports = {
  createUser,
  getAllUsers,
  findById,
  follow,
  followers,
  findByIdAndRemove
}