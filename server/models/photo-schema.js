const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'UserJepret'
  },
  caption: String,
  photo: String,
  votes: [{
    type: Schema.Types.ObjectId,
    ref: 'UserJepret'
  }],
  comments: [{
    by: [{
      type: Schema.Types.ObjectId,
      ref: 'UserJepret'
    }],
    comment: String
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

const Photo = mongoose.model('PhotoJepret', photoSchema)

module.exports = Photo