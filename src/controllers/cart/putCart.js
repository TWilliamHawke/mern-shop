const User = require('../../models/User')


module.exports.putCart = async(req, res) => {
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
}