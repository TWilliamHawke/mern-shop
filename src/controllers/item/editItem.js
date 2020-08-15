const { validationResult} = require('express-validator')
const Image = require('../../models/Image')
const Category = require('../../models/Category')
const Item = require('../../models/Item')
const Filter = require('../../models/Filter.js')


module.exports.editItem = async(req, res) => {
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
}