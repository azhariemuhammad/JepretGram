const User = require('../models/user-schema')
let message = ''

const createUser = (req, res) => {
  console.log(req.body)
  User.create({
    username: req.body.username,
    email: req.body.email
  })
    .then(user => {
      message = 'Succes Create One Data'
      res.status(200).send({ user: user, msg: message })
    })
    .catch(err => {
      console.log('err')
      res.send(err)
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
  User.find({ email: req.params.email })
    .then(user => {
      res.status(200).send(user)
    })
    .catch(err => {
      console.log(err)
    })
}

const findByIdAndUpdate = (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, {
    username: req.body.username,
    email: req.body.email
  }, {new: true})
  .then(user => {
    res.status(200).send(user)
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

const store = new Vuex.Store({
  getters,
  state,
  actions,
  mutations
})


module.exports = {
  createUser,
  getAllUsers,
  findById,
  findByIdAndUpdate,
  findByIdAndRemove
}