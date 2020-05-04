const {Schema, model} = require('mongoose')

const categorySchema = new Schema({
  name: {type: String},
  path: {type: String},
  data: [
    {
      prop: {type: String},
      valueType: {type: String}
    }
  ]
})

module.exports = model(categorySchema, 'Categories')