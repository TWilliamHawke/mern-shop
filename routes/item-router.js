const { Router } = require('express')
const { check, validationResult} = require('express-validator')
const upload = require('../middleware/save-image')
const { checkAdmin } = require('../middleware/checkToken')
const Image = require('../models/Image')
const Category = require('../models/Category')
const Item = require('../models/Item')
const Filter = require('../models/Filter.js')
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

    const [category, item] = await Promise.all([
      Category.findOne({path: req.query.cat}),
      Item.findById(req.query.item)
    ])
    const fullCat = await category.populate('fields').execPopulate()
    
    if(!item) return res.json({category: fullCat, itemData: null})

    const itemData = await item.populate('other.field').execPopulate()

    res.json({category: fullCat, itemData})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.get('/items', async (req, res) => {
  try {
    const {cat, min, max, brands, filters} = req.query

    const querry = {
      category: cat,
      price: {$lte: max, $gte: min},
    }
    if(brands) {
      querry.brand = {$in: brands.split(',')}
    }
    if(filters) {
      const splitFilters = filters.split(';')
        .map(f => f.split(',').map(f => ({filters: f})))
        .map(fArray => ({$or: fArray}))

        querry.$and = splitFilters
    }
    
    const items = await Item.find(querry)

    res.json(items)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.get('/item', async (req, res) => {
  try {
    const item = await Item.findById(req.query.item)
    const fullItem = await item.populate('other.field').execPopulate()

    res.json(fullItem)
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

    const {title, imageId, other, catName, ...values} = req.body

    const match = await Item.findOne({title})
    if(match) {
      return res.status(403).json({message: 'Item already exists'})
    }

    // if(imageId) {
    //   const image = await Image.findById(imageId)
    //   if(!image) return res.status(500).json({message: 'Server error: Image not found'})
    //   image.linkedTo = title
    //   await image.save()
    // }

    const [filters, imageErr] = await Promise.all([
      Filter.createFilters(other, catName),
      Image.setLink(imageId, title),
      Category.setMinMax(catName, req.body.price),
    ])
    
    if(imageErr) return res.status(500).json({message: 'Server error: Image not found'})

    const item = new Item({
      title,
      other,
      catName,
      filters,
      ...values
    })

    await item.save()

    res.json('ok')
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.put('/edit', checkAdmin, [
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

  const {title, imageId, other, oldImg, id, catName, ...values} = req.body

  const item = await Item.findById(id)
  if(item._id != id) {
    return res.status(403).json({message: 'Item with this title already exists'})
  }

  const [filters, imageErr] = await Promise.all([
    Filter.createFilters(other, catName),
    Image.changeLink(oldImg, imageId, title),
    Category.setMinMax(catName, req.body.price),
  ])
  
  if(imageErr) return res.status(500).json({message: 'Server error: Image not found'})

  const newItemData = {
    title,
    other,
    catName,
    filters,
    ...values
  }

  for(let key in newItemData) {
    item[key] = newItemData[key]
  }

  await item.save()

  res.json('ok')
} catch(e) {
  console.log(e)
  res.status(500).json({message: 'Server error'})
}
})

router.get('/filters', async(req, res) => {
  try {
    const [filters, category, categoryData] = await Promise.all([
      Filter.find({catName: req.query.cat}),
      Category.findOne({path: req.query.cat}).then(cat => cat.populate('fields').execPopulate()),
      Item.find({catName: req.query.cat}),
    ])

    const fields = category.fields.map(field => ({
      ...field._doc,
      values: filters.filter(f => f.field == field._id.toString()).map(f => ({value: f.value, id: f._id}))
    }))

    category._doc.fields = fields

    res.json({filters: category, categoryData})
    
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.put('/addpopular', checkAdmin, async(req, res) => {
  try {
    const item = await Item.findById(req.body.id)
    if(!item) return res.status(500).json({message: 'Server error: Item not found'})

    item.popular = true
    await item.save()

    const fullItem = await item.populate('other.field').execPopulate()
    res.json(fullItem)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.put('/removepopular', checkAdmin, async(req, res) => {
  try {
    const item = await Item.findById(req.body.id)
    if(!item) return res.status(500).json({message: 'Server error: Item not found'})

    item.popular = false
    await item.save()

    const fullItem = await item.populate('other.field').execPopulate()
    res.json(fullItem)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

router.get('/popular', async(req, res) => {
  try {
    const popular = await Item.find({popular: true})
    res.json(popular)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
})

module.exports = router