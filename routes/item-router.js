const { Router } = require('express')
const upload = require('../middleware/save-image')
const { checkAdmin } = require('../middleware/checkToken')
const Image = require('../models/Image')

const router = new Router()

router.post('/image', checkAdmin, upload.single('itemImg'), async(req, res) => {
  try {
    const img = req.file.path

    const image = new Image({
      imageUrl: img
    })
    await image.save()

    res.json({img})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }


})

module.exports = router