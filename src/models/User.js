const mongoose = require('mongoose');
const { removeOne } = require('./Static/removeOne');
const { removeAll } = require('./Static/removeAll');
const { addToCart } = require('./Static/addToCart');

const userSchema = new mongoose.Schema({
  login: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  cart: [
    {
      item: { type: mongoose.Types.ObjectId, ref: 'Item' },
      count: Number,
    }
  ]
});

userSchema.methods.addToCart = addToCart
userSchema.methods.removeOne = removeOne
userSchema.methods.removeAll = removeAll

const userModel = new mongoose.model('User', userSchema);


module.exports = userModel