const {Schema, model, Types} = require('mongoose')

const ItemSchema = new Schema({
  title: {type: String, required: true},
  category: {type: Types.ObjectId, ref: 'Categories', required: true},
  catName: String,
  price: {type: Number, required: true},
  discountPrice: {type: Number},
  image: String,
  brand: String,
  rating: Number,
  other: [
    {
      field: {
        type: Types.ObjectId,
        ref: 'Field'
      },
      value: {
        type: String
      }
    }
  ]
})

module.exports = model('Item', ItemSchema)