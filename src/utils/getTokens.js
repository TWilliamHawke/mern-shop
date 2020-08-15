const jwt = require('jsonwebtoken')
const config = require('config')


const getTokensById = (userType, id) => {
  const token = jwt.sign({id}, config.get(`${userType}secret`), {expiresIn: '1h'})
  const refToken = jwt.sign({id}, config.get(`${userType}secretRef`))
  const tokenDie = Date.now() + 3000*1000

  return {token, refToken, tokenDie}
}

const getTokensByRef = (userType, refToken) => {
  const {id} = jwt.verify(refToken, config.get(`${userType}secretRef`))
  const tokens = getTokensById(userType, id)
  return {tokens, id}
}

module.exports = {
  getTokensById,
  getTokensByRef
}