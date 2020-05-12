import { loadImage, saveTemplate, loadTemplate, editField, addField, getFields } from "./actions"
import { LOAD_IMAGE, SAVE_TEMPLATE, LOAD_TEMPLATE, EDIT_FIELD, GET_FIELDS, ADD_FIELD } from "./types"



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

})