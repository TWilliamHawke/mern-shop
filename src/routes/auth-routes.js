const { Router } = require('express')
//middlewaer
const { check } = require('express-validator')
const { setLogin } = require('../middleware/setLogin')
const { normalizePhone } = require('../middleware/normalizePhone')
//controllers
const { createUser } = require('../controllers/auth/createUser')
const { loginUser } = require('../controllers/auth/loginUser')
const { refreshToken } = require('../controllers/auth/refreshToken')


const router = Router()


router.post('/createUser', normalizePhone, [
  check('phone', 'Invalid phone').matches(/7\d{10}/),
  check('userName', 'User name is too short').isLength({ min: 2 }),
  check('email', 'Incorrect email').normalizeEmail().isEmail(),
  check('password', 'Password is too short').isLength({ min: 6 }),
], setLogin, createUser)


router.post('/loginUser', setLogin, loginUser)

router.post('/refresh', refreshToken)

module.exports = router