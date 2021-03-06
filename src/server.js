const express = require('express')
const authRoutes = require('./routes/auth-routes')
const templateRouter = require('./routes/template-routes')
const itemRouter = require('./routes/item-router')
const ordersRouter = require('./routes/orders-router')
const cartRouter = require('./routes/cart-router')
const path = require('path')


const server = express()

server.use(express.json({ extended: true }))
server.use('/images',express.static(path.join(__dirname, 'images')))


server.use('/api/auth', authRoutes)
server.use('/api/template', templateRouter)
server.use('/api/items', itemRouter)
server.use('/api/orders', ordersRouter)
server.use('/api/cart', cartRouter)

module.exports = server
