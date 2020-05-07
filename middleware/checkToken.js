const jwt = require('jsonwebtoken')
const config = require('config')

const errorMsg = {message: 'Wrong authorization data, please login again', logout: true}
const checkToken = (headers, userType) => {
  const token = headers.authorization.split(' ')[1]
  if(!token) throw new Error('token error')
  const userId = jwt.verify(token, config.get(`${userType}secret`))
  return userId
}


const checkAdmin = (req, res, next) => {
  try {
    checkToken(req.headers, 'admin')
    next()
  } catch(e) {
    console.log(e)
    return res.status(401).json(errorMsg)
  }
}

const checkUser = (req, res, next) => {
  try {
    const userId = checkToken(req.headers, 'user')
    req.user = userId
    next()
  } catch(e) {
    console.log(e)
    return res.status(401).json(errorMsg)
  }
}

module.exports = {checkAdmin, checkUser}