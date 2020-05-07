import { addField, getFields } from "./actions"
import { ADD_FIELD, GET_FIELDS } from "./types"

describe('test template config saga action', () => {
  it('should return ADD_FIELD type', () => {
    expect(addField('testData')).toEqual({type: ADD_FIELD, payload: 'testData'})
  })
  
  it('should return GET_FIELDS type', () => {
    expect(getFields()).toEqual({ type: GET_FIELDS })
  })
})