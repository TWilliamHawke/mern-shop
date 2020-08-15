const Order = require('../../models/Order.js')


module.exports.getOrders = async(req, res) => {
  try {
    const orders = await Order.find({userId: req.user.id})

    res.json(orders)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
}