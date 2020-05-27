const { Router } = require('express')
const { checkUser } = require('../middleware/checkToken')
const User = require('../models/User')


const router = new Router()

router.post('/add', checkUser, async(req, res) => {
  try {
    const user = await User.findById(req.user.id)
    if(!user) res.status(422).json({message: 'User not found'})
    user.addToCart(req.body.id)

    res.json({message: 'ok'})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

module.exports = router