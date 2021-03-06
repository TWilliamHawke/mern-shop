const {Schema, model, Types} = require('mongoose')

const ItemSchema = new Schema({
  title: { type: String, required: true },
  category: {
    type: Types.ObjectId,
    ref: 'Categories',
    required: true
  },
  catName: String,
  price: { type: Number, required: true },
  discountPrice: Number,
  image: String,
  brand: String,
  rating: Number,
  popular: { type: Boolean, default: false },
  filters: [
    { type: Types.ObjectId, ref: 'Filter' }
  ],
  other: [
    {
      field: { type: Types.ObjectId, ref: 'Field' },
      value: String
    }
  ]
})

module.exports = model('Item', ItemSchema)