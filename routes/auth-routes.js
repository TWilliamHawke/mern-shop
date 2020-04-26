const { Router } = require('express')
const router = Router()

router.post('/createUser', (req, res) => {
  res.json({message: 'hello world'})
})

module.exports = router