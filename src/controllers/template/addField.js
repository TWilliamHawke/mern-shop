const { validationResult } = require('express-validator')
const Fields = require('../../models/Field')

module.exports.addField = async (req, res) => {

  try {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect data from form'
      })
    }
  
    const {fieldName, values, measure, type, multiple} = req.body
    const match = await Fields.findOne({ fieldName, measure })
  
    if(match) {
      return res.status(400).json({ message: 'Field already exist'})
    }

    const field = new Fields({
      fieldName, type, measure, values, multiple
    })

    await field.save()
  
    res.json({message: 'ok'})
  
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong'})
  }
}