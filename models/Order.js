const { Schema, model, Types } = require('mongoose')

const orderSchema = new Schema({
  userId: {type: Types.ObjectId, ref: 'User', required: true},
  login: {type: String, required: true},
  items: [
    {
      title: {type: String, required: true},
      count: {type: Number, required: true},
      id: {type: Types.ObjectId, ref: 'Item', required: true}
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },

  cost: {type: Number, required: true}
})

module.exports = model('Order', orderSchema)