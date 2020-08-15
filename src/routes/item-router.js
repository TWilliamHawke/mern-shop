const { Router } = require('express')
const { check } = require('express-validator')

//middleware
const upload = require('../middleware/save-image')
const { checkAdmin } = require('../middleware/checkToken')

//controllers
const { getItems } = require('../controllers/item/getItems')
const { getItem } = require('../controllers/item/getItem')
const { addItem } = require('../controllers/item/addItem')
const { editItem } = require('../controllers/item/editItem')
const { postImage } = require('../controllers/item/postImage')
const { getTemplate } = require('../controllers/item/getTemplate')
const { getFilters } = require('../controllers/item/getFilters')
const { addPopular } = require('../controllers/item/addPopular')
const { removePopular } = require('../controllers/item/removePopular')
const { getPopular } = require('../controllers/item/getPopular')
//end of import


const router = new Router()

router.post('/image', checkAdmin, upload.single('itemImg'), postImage)
router.get('/template', checkAdmin, getTemplate)
router.get('/items', getItems)
router.get('/item', getItem)

router.post('/add', checkAdmin, [
    check('title', 'Title is too short').isLength({ min: 5 }),
    check('price', 'Wrong Price').isNumeric(),
    check('discountPrice', 'Wrong Discount Price').isNumeric(),
    check('brand', 'Wrong Brand Name').isString(),
    check('other', 'Wrong other fields').isArray()
  ], addItem)

router.put('/edit', checkAdmin, [
  check('title', 'Title is too short').isLength({ min: 5 }),
  check('price', 'Wrong Price').isNumeric(),
  check('discountPrice', 'Wrong Discount Price').isNumeric(),
  check('brand', 'Wrong Brand Name').isString(),
  check('other', 'Wrong other fields').isArray()
], editItem)

router.get('/filters', getFilters)
router.put('/addpopular', checkAdmin, addPopular)
router.put('/removepopular', checkAdmin, removePopular)
router.get('/popular', getPopular)

module.exports = router