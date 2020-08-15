const { Router } = require('express')
const { checkUser, checkAdmin } = require('../middleware/checkToken')
//controllers
const { postOrders } = require('../controllers/orders/postOrders')
const { getOrders } = require('../controllers/orders/getOrders')
const { getAllOrders } = require('../controllers/orders/getAllOrders')
const { deleteOrder } = require('../controllers/orders/deleteOrder')

const router = new Router()


router.post('/', checkUser, postOrders)
router.get('/', checkUser, getOrders)
router.get('/all', checkAdmin, getAllOrders)
router.delete('/', checkUser, deleteOrder)

module.exports = router