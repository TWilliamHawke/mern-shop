const { Router } = require('express')
const router = Router()
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const { getTokensById, getTokensByRef } = require('../utils/getTokens')

const setLogin = (req, res, next) => {
  const {phone, email, isEmail} = req.body
  req.body.login = isEmail ? email : phone
  next()
}

const normalizePhone = (req, res, next) => {
  const {phone} = req.body
  if(!phone) return res.status(406).json({message: 'Wrong User data'})
  req.body.phone = phone.replace(/\D/g, '')
  next()
}

router.post('/createUser', normalizePhone, [
  check('phone', 'Invalid phone').matches(/7\d{10}/),
  check('userName', 'User name is too short').isLength({ min: 2 }),
  check('email', 'Incorrect email').normalizeEmail().isEmail(),
  check('password', 'Password is too short').isLength({ min: 6 }),
], setLogin, async(req, res) => {
  try {
    const {login, userName, password} = req.body
    const validationErrors = validationResult(req)
    const errors = []
  
    if(!validationErrors.isEmpty()) {
      errors.push(validationErrors.array)
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
    res.status(401).json({message: 'Some server error'})
  }
})

router.post('/loginUser', setLogin, async(req, res) => {
  try {
    const {login, password} = req.body
    const user = await User.findOne({login})

    if(!user) return res.status(403).json({message: 'User does not exist'})

    const checkPassword = await bcryptjs.compare(password, user.password)
    if(!checkPassword) return res.status(403).json({message: 'Wrong password'})

    const userType = login === 'admin@admin.com' ? 'admin' : 'user'
    const tokens = getTokensById(userType, user._id)
    
    res.json({userType, tokens})

  } catch(e) {
    console.log(e)
    res.status(401).json({message: 'Some server error'})
  }
})

router.post('/refresh', (req, res) => {
  try {
    const {refToken, userType} = req.body
    const tokens = getTokensByRef(userType, refToken)
    
    res.json({userType, tokens})
  } catch(e) {
    console.log(e)
    res.status(401).json({message: 'Some server error'})
  }
})

module.exports = router