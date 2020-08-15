const Item = require('../../models/Item')

module.exports.getPopular = async(req, res) => {
  try {
    const popular = await Item.find({popular: true})
    res.json(popular)
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
}