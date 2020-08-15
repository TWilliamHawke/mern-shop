const Fields = require('../../models/Field')
const Category = require('../../models/Category')
const { transformFields } = require('../../utils/transformData')


module.exports.getFields = async (req, res) => {
  try {

    const fields = await Promise.all([
      Category.findOne({path: req.query.cat}),
      Fields.find({})
    ])
    
    res.json(transformFields(fields))

  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong'})
  }
}