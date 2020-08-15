const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const User = require('../../models/User')


module.exports.createUser = async(req, res) => {
  try {
    const {login, userName, password} = req.body
    const validationErrors = validationResult(req)
    const errors = []
  
    if(!validationErrors.isEmpty()) {
      errors.push(validationErrors.array())
    }

    const checkLogin = await User.findOne({login})
    if(checkLogin) {
      errors.push({msg: 'User with this login already exist'})
    }
  
    const checkUserName = await User.findOne({userName})
    if(checkUserName) {
      errors.push({msg: 'User with this userName already exist'})
    }

    if(errors.length) {
      return res.status(422).json({message: 'valdation errors', errors})
    }
  
    const hashedPassword = await bcryptjs.hash(password, 12)
    const user = await new User({login, userName, password: hashedPassword})
    await user.save()

    res.status(201).json({message: 'Account has been created'})
  
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Some server error'})
  }
}