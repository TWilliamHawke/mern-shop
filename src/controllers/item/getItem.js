const Item = require('../../models/Item')

const getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.query.item)
    const fullItem = await item.populate('other.field').execPopulate()

    res.json(fullItem)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
}

module.exports = { getItem }