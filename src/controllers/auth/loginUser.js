const bcryptjs = require('bcryptjs')
const User = require('../../models/User')
const { getTokensById } = require('../../utils/getTokens')


module.exports.loginUser = async(req, res) => {
  try {
    const {login, password} = req.body
    const user = await User.findOne({login})

    if(!user) return res.status(403).json({message: 'User does not exist'})

    const checkPassword = await bcryptjs.compare(password, user.password)
    if(!checkPassword) return res.status(403).json({message: 'Wrong password'})

    const userType = login === 'admin@admin.com' ? 'admin' : 'user'
    const tokens = getTokensById(userType, user._id)

    const {cart} = await user.populate('cart.item').execPopulate()
    
    res.json({userType, tokens, cart})

  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Some server error'})
  }
}