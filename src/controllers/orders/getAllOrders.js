const Order = require('../../models/Order.js')


module.exports.getAllOrders = async(req, res) => {
  try {
    const orders = await Order.find({})

    res.json(orders)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
}