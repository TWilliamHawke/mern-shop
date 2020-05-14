const { Router } = require('express')
const { checkAdmin} = require('../middleware/checkToken')
const { check, validationResult } = require('express-validator')
const Fields = require('../models/Field')
const Category = require('../models/Category')
const { transformFields } = require('../utils/transformData')

const router = new Router()

router.post('/addField', checkAdmin, [
  check('fieldName', 'wrong FieldName').isString(),
  check('values', 'Wrong values').isArray(),
  check('measure', 'wrong Unit of measure').isString(),
  check('type', 'wrong type').isString(),
  check('multiple', 'wrong multiple type').isBoolean()
  ], async (req, res) => {

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
})

router.put('/editTemplate', async(req, res) => {
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
})


//getFields action
router.get('/fields', checkAdmin, async (req, res) => {
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
})

router.post('/fields', checkAdmin, async(req, res) => {
  try {
    const {name, path, fields} = req.body

    const category = await Category.findOne({path})
    if(!category) {
      return res.status(400).json({ message: 'Category not exist'})
    }
    category.fields = fields

    await category.save()
    



    res.json({message: 'OK'})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong'})
  }
})





module.exports = router