const User = require('../../models/User')


module.exports.getCart = async(req, res) => {
  try {
    const user = await User.findById(req.user.id)
    if(!user) res.status(422).json({message: 'User not found'})

    const {cart} = await user.populate('cart.item').execPopulate()

    res.json(cart)
    
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
}