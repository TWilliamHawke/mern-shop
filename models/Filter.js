const {Schema, model, Types} = require('mongoose')

const filterSchema = new Schema({
  category: {type: Types.ObjectId, ref: 'Categories', required: true},
  field: {type: Types.ObjectId, ref: 'Field', required: true},
  value: {type: String, required: true}
})

module.exports = model('Filter', filterSchema)