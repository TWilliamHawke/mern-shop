const Item = require('../../models/Item')

module.exports.addPopular = async(req, res) => {
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
}