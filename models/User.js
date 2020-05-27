const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  cart: [
    {
      item: {type: mongoose.Types.ObjectId, ref: 'Item'},
      count: {type: Number,}
    }
  ]
});

userSchema.methods.addToCart = function(id) {
  const cart = [...this.cart]
  const idx = cart.findIndex(({item}) => item == id)
  
  if(idx >= 0) {
    cart[idx].count++
  } else {
    cart.push({
      item: id,
      count: 1
    })
  }
  this.cart = cart
  return this.save()

}

const userModel = new mongoose.model('User', userSchema);


module.exports = userModel