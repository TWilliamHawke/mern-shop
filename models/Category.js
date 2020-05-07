const {Schema, model, Types} = require('mongoose')

const categorySchema = new Schema({
  name: {type: String},
  path: {type: String},
  fields: [
    {
        type: Types.ObjectId, ref: 'Field'
    }
  ]
})

module.exports = model(categorySchema, 'Categories')