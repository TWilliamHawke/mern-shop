const User = require('../../models/User')
const Order = require('../../models/Order.js')

module.exports.postOrders = async(req, res) => {
  try {
    const user = await User.findById(req.user.id)
    const { cart, login } = await user.populate('cart.item').execPopulate()

    const items = cart.map(({item, count}) => ({
      title: item.title,
      id: item._id,
      count
    }))

    const cost = cart.reduce((sum, { item, count }) => sum + item.price * count, 0)

    const order = new Order({
      userId: user._id,
      login,
      items,
      cost
    })

    user.cart = []
    await user.save()
    await order.save()

    res.json({message: 'ok'})

  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
}