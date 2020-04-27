const { Router } = require('express')
const router = Router()
const { check, validationResult } = require('express-validator')


router.post('/createUser', [
  check('phone', 'invalid phone').isMobilePhone('ru-RU'),
  check('userName', 'User name is too short').isLength({ min: 2 }),
  check('email', 'incorrect email').normalizeEmail().isEmail(),
  check('password', 'Password is too short').isLength({ min: 6 }),
], (req, res) => {
  const {phone, email, userName, password} = req.body

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