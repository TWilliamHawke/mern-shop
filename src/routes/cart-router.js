const { Router } = require('express')
const { checkUser } = require('../middleware/checkToken')
const User = require('../models/User')


const router = new Router()

router.post('/', checkUser, async(req, res) => {
  try {
    if(!req.body.id) return res.status(422).json({message: 'Wrong data'})
    const user = await User.findById(req.user.id)
    if(!user) res.status(422).json({message: 'User not found'})
    await user.addToCart(req.body.id)
    const {cart} = await user.populate('cart.item').execPopulate()

    res.json(cart)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.get('/', checkUser, async(req, res) => {
  try {
    const user = await User.findById(req.user.id)
    if(!user) res.status(422).json({message: 'User not found'})

    const {cart} = await user.populate('cart.item').execPopulate()

    res.json(cart)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.put('/', checkUser, async(req, res) => {
  try {
    if(!req.body.id) return res.status(422).json({message: 'Wrong data'})
    const user = await User.findById(req.user.id)
    if(!user) res.status(422).json({message: 'User not found'})
    await user.removeOne(req.body.id)
    const {cart} = await user.populate('cart.item').execPopulate()

    res.json(cart)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.delete('/', checkUser, async(req, res) => {
  try {
    if(!req.body.id) return res.status(422).json({message: 'Wrong data'})
    const user = await User.findById(req.user.id)
    if(!user) res.status(422).json({message: 'User not found'})
    await user.removeAll(req.body.id)
    const {cart} = await user.populate('cart.item').execPopulate()

    res.json(cart)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

module.exports = router