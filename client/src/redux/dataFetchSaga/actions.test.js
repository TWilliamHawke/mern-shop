import { loadImage, saveTemplate, loadTemplate, editField, addField, getFields, addItem, getCategory, getItem, editItem, addToCart } from "./actions"
import { LOAD_IMAGE, SAVE_TEMPLATE, LOAD_TEMPLATE, EDIT_FIELD, GET_FIELDS, ADD_FIELD, ADD_ITEM, GET_CATEGORY, GET_ITEM, EDIT_ITEM, ADD_TO_CART } from "./types"

jest.mock('../../utils/actionHelpers.js', () => ({tfItemData: jest.fn(() => 'TransformedItemData')}))

describe('test itemSaga actions', () => {
  it('should return LOAD_IMAGE type', () => {
    expect(loadImage('somedata'))
      .toEqual({type: LOAD_IMAGE, payload: 'somedata'})
  })

  it('should return SAVE_TEMPLATE type', () => {
    expect(saveTemplate('somedata'))
      .toEqual({type: SAVE_TEMPLATE, payload: 'somedata'})
  })

  it('should return LOAD_TEMPLATE type', () => {
    expect(loadTemplate('somedata'))
      .toEqual({type: LOAD_TEMPLATE, payload: 'somedata'})
  })

  it('should return EDIT_FIELD type', () => {
    expect(editField('somedata'))
      .toEqual({type: EDIT_FIELD, payload: 'somedata'})
  })

  it('should return ADD_FIELD type', () => {
    expect(addField('testData')).toEqual({type: ADD_FIELD, payload: 'testData'})
  })
  
  it('should return GET_FIELDS type', () => {
    expect(getFields('category')).toEqual({ type: GET_FIELDS, payload: 'category' })
  })

  it('should return ADD_ITEM type', () => {
    expect(addItem('itemData')).toEqual({ type: ADD_ITEM, payload: 'TransformedItemData' })
  })

  it('should return GET_CATEGORY type', () => {
    expect(getCategory('name')).toEqual({ type: GET_CATEGORY, payload: 'name' })
  })

  it('should return GET_ITEM type', () => {
    expect(getItem('id')).toEqual({ type: GET_ITEM, payload: 'id' })
  })

  it('should return EDIT_ITEM type', () => {
    expect(editItem('itemData')).toEqual({ type: EDIT_ITEM, payload: 'TransformedItemData' })
  })

  it('should return ADD_TO_CART type', () => {
    expect(addToCart('itemid')).toEqual({ type: ADD_TO_CART, payload: 'itemid' })
  })



})