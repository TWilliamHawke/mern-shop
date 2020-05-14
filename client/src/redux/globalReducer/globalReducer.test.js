import reducer, {initialState as reducerState} from './globalReducer'
import { FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, CLEAR_GLOBAL_ERRORS } from './types'

describe('test with rendom action', () => {
  it('should not change state', () => {
    expect(reducer(reducerState, 'randomAction')).toEqual(reducerState)
  })
})


describe('test FETCH_DATA_REQUEST action', () => {
  it('should clear errors and start loading', () => {
    const initialState = {
      ...reducerState,
      loading: false,
      errors: 'errorArray',
    }
    expect(reducer(initialState, {type: FETCH_DATA_REQUEST})).toEqual({
      ...reducerState,
      errors: [],
      loading: true,
    })
  })
})

describe('test FETCH_DATA_FAILURE action', () => {
  it('should stop loading and set errors', () => {
    const initialState = {
      ...reducerState,
      loading: true,
      errors: [],
    }
    expect(reducer(initialState, 
      {type: FETCH_DATA_FAILURE, payload: 'errorsArray'})).toEqual({
        ...reducerState,
        errors: 'errorsArray',
        loading: false,
      })
  })
})

describe('test FETCH_DATA_SUCCESS action', () => {
  it('should stop loading', () => {
    const initialState = {
      ...reducerState,
      loading: true,
    }
    expect(reducer(initialState, 
      {type: FETCH_DATA_SUCCESS})).toEqual({
        ...reducerState,
        loading: false,
      })
  })
})

describe('test CLEAR_GLOBAL_ERRORS action', () => {
  it('should clear errors array', () => {
    const initialState = {
      ...reducerState,
      errors: 'array'
    }
    expect(reducer(initialState, 
      {type: CLEAR_GLOBAL_ERRORS})).toEqual({
        ...reducerState,
        errors: []
      })
  })
})
