import { addFieldSuccess, getFieldsSuccess, saveTemplateSuccess, saveTemplateRedirrect, loadTemplateSuccess, loadImageSuccess, clearTemplateData } from "./actions"
import { ADD_FIELD_SUCCESS, GET_FIELDS_SUCCESS, SAVE_TEMPLATE_SUCCESS, SAVE_TEMPLATE_REDIRRECT, LOAD_TEMPLATE_SUCCESS, LOAD_IMAGE_SUCCESS, CLEAR_TEMPLATE_DATA} from './types'

describe('Template reducres actions tests', () => {
  

  it('should return ADD_FIELD_SUCCESS type', () => {
    expect(addFieldSuccess()).toEqual({type: ADD_FIELD_SUCCESS})
  })

  it('should return GET_FIELDS_SUCCESS type', () => {
    expect(getFieldsSuccess('fields')).toEqual({type: GET_FIELDS_SUCCESS, payload: 'fields'})
  })

  it('should return SAVE_TEMPLATE_SUCCESS type', () => {
    expect(saveTemplateSuccess()).toEqual({type: SAVE_TEMPLATE_SUCCESS})
  })

  it('should return SAVE_TEMPLATE_REDIRRECT type', () => {
    expect(saveTemplateRedirrect()).toEqual({type: SAVE_TEMPLATE_REDIRRECT})
  })

  it('should return LOAD_TEMPLATE_SUCCESS type', () => {
    expect(loadTemplateSuccess()).toEqual({type: LOAD_TEMPLATE_SUCCESS})
  })

  it('should return LOAD_IMAGE_SUCCESS type', () => {
    expect(loadImageSuccess()).toEqual({type: LOAD_IMAGE_SUCCESS})
  })

  it('should return CLEAR_TEMPLATE_DATA type', () => {
    expect(clearTemplateData()).toEqual({type: CLEAR_TEMPLATE_DATA})
  })

})