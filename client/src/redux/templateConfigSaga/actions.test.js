import { addField } from "./actions"
import { ADD_FIELD } from "./types"

describe('test template config saga action', () => {
  it('should return ADD_FIELD type', () => {
    expect(addField('testData')).toEqual({type: ADD_FIELD, payload: 'testData'})
  })
})