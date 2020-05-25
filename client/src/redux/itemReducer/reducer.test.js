import reducer, {initialState as reducerState} from './itemReducer'
import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE, LOAD_CATEGORY_SUCCESS } from './types'


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

describe('test LOAD_CATEGORY_SUCCESS action', () => {
  it('should stop loading and set errors', () => {
    const initialState = {
      ...reducerState,
      categoryData: null,
    }
    expect(reducer(initialState, 
      {type: LOAD_CATEGORY_SUCCESS, payload: 'catData'})).toEqual({
        ...reducerState,
        categoryData: 'catData',
      })
  })
})


