const Category = require('../../models/Category')


module.exports.postFields = async(req, res) => {
  try {
    const {path, fields, brands} = req.body

    const category = await Category.findOne({path})
    if(!category) {
      return res.status(400).json({ message: 'Category not exist'})
    }

    category.fields = fields
    category.brands = brands

    await category.save()
    
    res.json({message: 'OK'})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong'})
  }
}