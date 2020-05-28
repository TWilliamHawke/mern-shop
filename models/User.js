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

userSchema.methods.addToCart = async function(id) {
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
  await this.save()
  return cart

}

userSchema.methods.removeOne = async function(id) {
  const cart = [...this.cart]
  const idx = cart.findIndex(({item}) => item == id)
  
  cart[idx].count--

  this.cart = cart
  await this.save()
  return cart
}

userSchema.methods.removeAll = async function(id) {
  const cart = [...this.cart]
  
  this.cart = cart.filter(({item}) => {
    return item.toString() !== id.toString()
  })
  await this.save()
  return cart
}

const userModel = new mongoose.model('User', userSchema);


module.exports = userModel