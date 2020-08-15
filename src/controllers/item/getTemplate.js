const Category = require('../../models/Category')
const Item = require('../../models/Item')

const getTemplate = async(req, res) => {
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
}

module.exports = {getTemplate}