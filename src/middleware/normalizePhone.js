module.exports.normalizePhone = (req, res, next) => {
  const {phone} = req.body
  if(!phone) return res.status(406).json({message: 'Wrong User data'})
  req.body.phone = phone.replace(/\D/g, '')
  next()
}