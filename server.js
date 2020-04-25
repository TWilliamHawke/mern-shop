const express = require('express')
const authRoutes = require('./routes/auth-routes')

const server = express()



server.use('/api/auth', authRoutes)

module.exports = server
