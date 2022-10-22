const mongoose = require('mongoose')

const TogetSchema = new mongoose.Schema({
  toget: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('GetThis', TogetSchema)
