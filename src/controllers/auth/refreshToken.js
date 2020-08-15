const User = require('../../models/User')
const { getTokensByRef } = require('../../utils/getTokens')

module.exports.refreshToken = async (req, res) => {
  try {
    const {refToken, userType} = req.body
    const {tokens, id} = getTokensByRef(userType, refToken)
    const user = await User.findById(id)

    const {cart} = await user.populate('cart.item').execPopulate()
    
    res.json({userType, tokens, cart})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Some server error'})
  }
}