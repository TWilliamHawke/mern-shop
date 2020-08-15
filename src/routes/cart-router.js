const { Router } = require('express')
const { checkUser } = require('../middleware/checkToken')
//controllers
const { postCart } = require('../controllers/cart/postCart')
const { getCart } = require('../controllers/cart/getCart')
const { putCart } = require('../controllers/cart/putCart')
const { delCart } = require('../controllers/cart/delCart')


const router = new Router()

router.post('/', checkUser, postCart)
router.get('/', checkUser, getCart)
router.put('/', checkUser, putCart)
router.delete('/', checkUser, delCart)

module.exports = router