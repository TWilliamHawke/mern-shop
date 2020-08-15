module.exports.setLogin = (req, res, next) => {
  const {phone, email, isEmail} = req.body
  req.body.login = isEmail ? email : phone
  next()
}