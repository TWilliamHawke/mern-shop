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
      field: Types.ObjectId, ref: 'Field',
      value: {
        type: String
      }
    }
  ]
})

module.exports = model('Item', ItemSchema)