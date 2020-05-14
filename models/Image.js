const{ Schema, model, Types } = require('mongoose')

const ImageSchema = new Schema({
  imageUrl: {
    type: String,
    required: true
  },
  linkedTo: {
    type: String
  }
})

module.exports = model('Image', ImageSchema)