const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  photo: String,
  votes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const Photo = mongoose.model('Photo', PhotoSchema)

module.exports = Photo