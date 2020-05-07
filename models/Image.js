const{ Schema, model, Types } = require('mongoose')

const ImageSchema = new Schema({
  imageUrl: {
    type: String,
    required: true
  },
  linkedTo: {
    type: Types.ObjectId, ref: 'User'
  }
})

module.exports = model('Image', ImageSchema)