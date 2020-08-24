module.exports.removeOne = async function(id) {
  const cart = [...this.cart]
  const idx = cart.findIndex(({item}) => item == id)
  
  cart[idx].count--

  this.cart = cart
  await this.save()
  return cart
}