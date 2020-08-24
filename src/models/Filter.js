const { Schema, model, Types } = require('mongoose')
const { createFilters } = require('./Static/createFilters')

const filterSchema = new Schema({
  catName: { type: String, required: true },
  field: {
    type: Types.ObjectId,
    ref: 'Field',
    required: true
  },
  value: { type: String, required: true }
})

filterSchema.statics.createFilters = createFilters


module.exports = model('Filter', filterSchema)