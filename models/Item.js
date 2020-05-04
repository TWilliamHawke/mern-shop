const {Schema, model} = require('mongoose')

const ItemSchema = new Schema({
  name: {type: String, required: true},
  category: {type: String, required: true},
  price: {type: Number, required: true},
  discount: {type: Number, default: 0},
  image: String,
  rating: Number,
  other: Schema.Types.Mixed
})

module.exports = model(ItemSchema, 'Item')