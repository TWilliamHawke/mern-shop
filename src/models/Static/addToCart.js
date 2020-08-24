module.exports.addToCart = async function(id) {
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