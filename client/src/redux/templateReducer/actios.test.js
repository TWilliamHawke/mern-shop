import { templateRequest, templateFailure, addFieldSuccess, getFieldsSuccess, loadContent, saveTemplateSuccess, saveTemplateRedirrect } from "./actions"
import { TEMPLATE_FAILURE, TEMPLATE_REQUEST, ADD_FIELD_SUCCESS, GET_FIELDS_SUCCESS, LOAD_CONTENT, SAVE_TEMPLATE_SUCCESS, SAVE_TEMPLATE_REDIRRECT} from './types'

describe('Template reducres actions tests', () => {
  

  it('should return TEMPLATE_REQUEST type', () => {
    expect(templateRequest()).toEqual({type: TEMPLATE_REQUEST})
  })

  it('should return TEMPLATE_FAILURE type', () => {
    expect(templateFailure('errorsArray')).toEqual({type: TEMPLATE_FAILURE, payload: 'errorsArray'})
  })

  it('should return ADD_FIELD_SUCCESS type', () => {
    expect(addFieldSuccess()).toEqual({type: ADD_FIELD_SUCCESS})
  })

  it('should return GET_FIELDS_SUCCESS type', () => {
    expect(getFieldsSuccess('fields')).toEqual({type: GET_FIELDS_SUCCESS, payload: 'fields'})
  })

  it('should return LOAD_CONTENT type', () => {
    expect(loadContent()).toEqual({type: LOAD_CONTENT})
  })

  it('should return SAVE_TEMPLATE_SUCCESS type', () => {
    expect(saveTemplateSuccess()).toEqual({type: SAVE_TEMPLATE_SUCCESS})
  })

  it('should return SAVE_TEMPLATE_REDIRRECT type', () => {
    expect(saveTemplateRedirrect()).toEqual({type: SAVE_TEMPLATE_REDIRRECT})
  })

})