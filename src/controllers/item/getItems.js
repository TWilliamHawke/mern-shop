const Item = require('../../models/Item')

const getItems = async (req, res) => {
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
}

module.exports = { getItems }