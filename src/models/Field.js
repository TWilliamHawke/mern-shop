const {model, Schema} = require('mongoose')


const fieldSchema = new Schema({
  fieldName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  measure: String,
  multiple: Boolean,
  values: [
    { type: String, }
  ]
})

module.exports = model('Field', fieldSchema)