import reducer, {initialState as reducerState} from './templateReducer'
import { TEMPLATE_REQUEST, TEMPLATE_FAILURE, GET_FIELDS_SUCCESS, ADD_FIELD_SUCCESS, SAVE_TEMPLATE_SUCCESS, SAVE_TEMPLATE_REDIRRECT } from './types'



describe('test with random action', () => {
  it('should return default state', () => {
    expect(reducer(reducerState, 'randomAction')).toEqual(reducerState)
  })
})

describe('test with TEMPLATE_REQUEST action', () => {
  const initialState = {
    ...reducerState,
    loading: false,
    errors: 'errorsArray'
  }

  it('should start loading and clear errors', () => {
    expect(reducer(initialState, {type: TEMPLATE_REQUEST})).toEqual({
      ...reducerState,
      loading: true,
      errors: []
    })
  })
})

describe('test with TEMPLATE_FAILURE action', () => {
  const initialState = {
    ...reducerState,
    loading: true,
    errors: []
  }

  it('should stop loading and set errors', () => {
    expect(reducer(initialState, 
      {type: TEMPLATE_FAILURE, payload: 'errorsArray'}))
      .toEqual({
        ...reducerState,
        loading: false,
        errors: 'errorsArray'
      })
  })
})

describe('test with GET_FIELDS_SUCCESS action', () => {
  const initialState = {
    ...reducerState,
    noContent: true,
    fields: []
  }

  it('should stop loading and set fields', () => {
    expect(reducer(initialState, 
      {type: GET_FIELDS_SUCCESS, payload: 'fields'}))
      .toEqual({
        ...reducerState,
        noContent: false,
        fields: 'fields'
      })
  })
})

describe('test with ADD_FIELD_SUCCESS action', () => {
  const initialState = {
    ...reducerState,
    loading: true,
  }

  it('should stop loading', () => {
    expect(reducer(initialState, 
      {type: ADD_FIELD_SUCCESS}))
      .toEqual({
        ...reducerState,
        loading: false,
      })
  })
})


describe('test with SAVE_TEMPLATE_SUCCESS action', () => {
  const initialState = {
    ...reducerState,
    saveSuccess: false
  }

  it('should set saveSuccess to true', () => {
    expect(reducer(initialState, 
      {type: SAVE_TEMPLATE_SUCCESS}))
      .toEqual({
        ...reducerState,
        saveSuccess: true,
      })
  })
})

describe('test with SAVE_TEMPLATE_REDIRRECT action', () => {
  const initialState = {
    ...reducerState,
    saveSuccess: true
  }

  it('should set saveSuccess to false', () => {
    expect(reducer(initialState, 
      {type: SAVE_TEMPLATE_REDIRRECT}))
      .toEqual({
        ...reducerState,
        saveSuccess: false,
      })
  })
})
