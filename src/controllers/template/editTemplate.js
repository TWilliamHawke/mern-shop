const Fields = require('../../models/Field')


module.exports.editTemplate = async(req, res) => {
  try {
    const {id, fieldName, measure, values, type, multiple} = req.body
    let field = await Fields.findById(id)

    if(!field) {
      return res.status(400).json({ message: 'Field does not exists'})
    }
    
    await Fields.updateOne({_id: id}, {fieldName, measure, type, values, multiple})


    res.json({message: 'ok'})

  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong'})
  }
}