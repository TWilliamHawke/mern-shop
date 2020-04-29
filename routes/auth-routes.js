const { Router } = require('express')
const router = Router()
const { check, validationResult } = require('express-validator')


const setLogin = (req, res, next) => {
  const {phone, email, isEmail} = req.body
  req.body.login = isEmail ? email : phone
  next()
}

const normalizePhone = (req, res, next) => {
  const {phone} = req.body
  if(!phone) return res.status(401).json({message: 'Wrong User data'})
  req.body.phone = phone.replace(/\D/g, '')
  next()
}

router.post('/createUser', normalizePhone, [
  check('phone', 'Invalid phone').matches(/7\d{10}/),
  check('userName', 'User name is too short').isLength({ min: 2 }),
  check('email', 'Incorrect email').normalizeEmail().isEmail(),
  check('password', 'Password is too short').isLength({ min: 6 }),
], setLogin, (req, res) => {
  const {login, userName, password} = req.body
  console.log(login, userName, password)
  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    return res.status(422).json({
      message: 'validation errors', 
      errors: errors.array()
    })
  }

  res.json({message: 'hello world'})
})

module.exports = router