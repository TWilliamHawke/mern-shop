const { Router } = require('express')
const { checkAdmin} = require('../middleware/checkToken')
const { check } = require('express-validator')
//controllers
const { addField } = require('../controllers/template/addField')
const { editTemplate } = require('../controllers/template/editTemplate')
const { getFields } = require('../controllers/template/getFields')
const { postFields } = require('../controllers/template/postFields')

const router = new Router()

router.post('/addField', checkAdmin, [
  check('fieldName', 'wrong FieldName').isString(),
  check('values', 'Wrong values').isArray(),
  check('measure', 'wrong Unit of measure').isString(),
  check('type', 'wrong type').isString(),
  check('multiple', 'wrong multiple type').isBoolean()
  ], addField)

router.put('/editTemplate', editTemplate)
//getFields action
router.get('/fields', checkAdmin, getFields)
//save template
router.post('/fields', checkAdmin, postFields)


module.exports = router