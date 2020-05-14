const {Schema, model, Types} = require('mongoose')

const categorySchema = new Schema({
  name: {type: String},
  path: {type: String},
  fields: [
    {
        type: Types.ObjectId, ref: 'Field'
    }
  ],
  brands: [
    {
      type: String,
    }
  ]
})

module.exports = model('Categories', categorySchema)