const { Router } = require('express')
const upload = require('../middleware/save-image')
const { checkAdmin } = require('../middleware/checkToken')
const Image = require('../models/Image')
const fs = require('fs')

const router = new Router()

router.post('/image', checkAdmin, upload.single('itemImg'), async(req, res) => {
  try {
    const img = req.file.path

    const images = await Image.find({linkedTo: {$exists: false}})
    await images.map(({imageUrl}) => imageUrl.split('\\')[1])
      .forEach(async file => await fs.unlink(`images/${file}`, err => {
        if(err) throw err
      }))

    await Image.deleteMany({linkedTo: {$exists: false}})

    const image = new Image({
      imageUrl: img
    })
    await image.save()

    res.json({img, id: image._id})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }


})

module.exports = router