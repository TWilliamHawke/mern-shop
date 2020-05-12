import reducer, {initialState as reducerState} from './reducer'
import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE, LOAD_IMAGE_SUCCESS, LOAD_TEMPLATE_SUCCESS } from './types'


describe('test with random action', () => {
  it('should return initial state', () => {
    expect(reducer(reducerState, {type: 'testType'})).toEqual({...reducerState})
  })
})

describe('test FETCH_ITEM_REQUEST action', () => {
  it('should clear message and start loading', () => {
    const initialState = {
      ...reducerState,
      loading: false,
      errors: 'errorArray',
    }
    expect(reducer(initialState, {type: FETCH_ITEM_REQUEST})).toEqual({
      ...reducerState,
      errors: [],
      loading: true,
    })
  })
})

describe('test FETCH_ITEM_FAILURE action', () => {
  it('should stop loading and set errors', () => {
    const initialState = {
      ...reducerState,
      loading: true,
      errors: [],
    }
    expect(reducer(initialState, 
      {type: FETCH_ITEM_FAILURE, payload: 'errorsArray'})).toEqual({
        ...reducerState,
        errors: 'errorsArray',
        loading: false,
      })
  })
})


