module.exports.removeAll = async function(id) {
  const cart = [...this.cart]
  
  this.cart = cart.filter(({item}) => {
    return item.toString() !== id.toString()
  })
  await this.save()
  return cart
}