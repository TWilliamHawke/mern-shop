const Category = require('../../models/Category')
const Item = require('../../models/Item')
const Filter = require('../../models/Filter.js')


module.exports.getFilters = async(req, res) => {
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
}