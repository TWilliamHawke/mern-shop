const { Router } = require('express')
const { checkUser, checkAdmin } = require('../middleware/checkToken')
const User = require('../models/User')
const Order = require('../models/Order.js')

const router = new Router()


router.post('/', checkUser, async(req, res) => {
  try {
    const user = await User.findById(req.user.id)
    const {cart, login} = await user.populate('cart.item').execPopulate()
    const items = cart.map(({item, count}) => ({
      title: item.title,
      id: item._id,
      count
    }))

    const order = new Order({
      userId: user._id,
      login,
      items,
      cost: req.body.cost
    })

    user.cart = []
    await user.save()
    await order.save()

    res.json({message: 'ok'})

  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.get('/', checkUser, async(req, res) => {
  try {
    const orders = await Order.find({userId: req.user.id})

    res.json(orders)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.get('/all', checkAdmin, async(req, res) => {
  try {
    const orders = await Order.find({})

    res.json(orders)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.delete('/', checkUser, async(req, res) => {
  try {
    await Order.findByIdAndDelete(req.body.id)
    const orders = await Order.find({userId: req.user.id})

    res.json(orders)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }

})

module.exports = router