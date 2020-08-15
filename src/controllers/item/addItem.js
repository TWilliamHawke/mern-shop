const { validationResult} = require('express-validator')
const Image = require('../../models/Image')
const Category = require('../../models/Category')
const Item = require('../../models/Item')
const Filter = require('../../models/Filter.js')

const addItem = async(req, res) => {
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
}

module.exports = { addItem }