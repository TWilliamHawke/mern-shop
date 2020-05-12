const {Schema, model, Types} = require('mongoose')

const ItemSchema = new Schema({
  name: {type: String, required: true},
  category: {type: Types.ObjectId, ref: 'Categories', required: true},
  price: {type: Number, required: true},
  discountPrice: {type: Number},
  image: String,
  rating: Number,
  other: [
    {
      field: String,
      value: {
        type: Types.ObjectId, ref: 'Field'
      }
    }
  ]
})

module.exports = model('Item', ItemSchema)