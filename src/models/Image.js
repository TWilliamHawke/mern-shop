const { Schema, model } = require('mongoose')
const { setLink } = require('./Static/setLink')
const { changeLink } = require('./Static/changeLink')

const ImageSchema = new Schema({
  imageUrl: { type: String, required: true },
  linkedTo: String
})

ImageSchema.statics.setLink = setLink
ImageSchema.statics.changeLink = changeLink

module.exports = model('Image', ImageSchema)