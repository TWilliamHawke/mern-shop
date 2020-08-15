const Order = require('../../models/Order.js')


module.exports.deleteOrder = async(req, res) => {
  try {
    await Order.findByIdAndDelete(req.body.id)
    const orders = await Order.find({userId: req.user.id})

    res.json(orders)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }

}