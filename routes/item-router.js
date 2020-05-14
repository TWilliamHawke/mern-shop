const { Router } = require('express')
const { check, validationResult} = require('express-validator')
const upload = require('../middleware/save-image')
const { checkAdmin } = require('../middleware/checkToken')
const Image = require('../models/Image')
const Category = require('../models/Category')
const Item = require('../models/Item')
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

router.get('/template', checkAdmin, async(req, res) => {
  try {
    const category = await (await Category.findOne({path: req.query.cat})).populate('fields').execPopulate()

    res.json(category)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.post('/add', checkAdmin, [
    check('title', 'Title is too short').isLength({ min: 5 }),
    check('price', 'Wrong Price').isNumeric(),
    check('discountPrice', 'Wrong Discount Price').isNumeric(),
    check('brand', 'Wrong Brand Name').isString(),
    check('other', 'Wrong other fields').isArray()
  ], async(req, res) => {
  try {
    const errors = validationResult(req)
  
    if(!errors.isEmpty()) {
      return res.status(422).json({
        message: 'validation errors', 
        errors: errors.array()
      })
    }

    const {title, imageId, ...values} = req.body

    const match = await Item.findOne({title})
    if(match) {
      return res.status(403).json({message: 'Item already exists'})
    }

    if(imageId) {
      const image = await Image.findById(imageId)
      if(!image) return res.status(500).json({message: 'Server error'})
      image.linkedTo = title
      await image.save()
    }
  

    const item = new Item({
      title,
      ...values
    })

    await item.save()
 

    res.json('ok')
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

module.exports = router