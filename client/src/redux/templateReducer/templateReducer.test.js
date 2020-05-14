import reducer, {initialState as reducerState} from './templateReducer'
import { GET_FIELDS_SUCCESS, ADD_FIELD_SUCCESS, SAVE_TEMPLATE_SUCCESS, SAVE_TEMPLATE_REDIRRECT, LOAD_IMAGE_SUCCESS, LOAD_TEMPLATE_SUCCESS, CLEAR_TEMPLATE_DATA } from './types'



describe('test with random action', () => {
  it('should return default state', () => {
    expect(reducer(reducerState, 'randomAction')).toEqual(reducerState)
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
  }

  it('should stop loading', () => {
    expect(reducer(initialState, 
      {type: ADD_FIELD_SUCCESS}))
      .toEqual({
        ...reducerState,
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

describe('test LOAD_IMAGE_SUCCESS action', () => {
  it('should set image url', () => {
    const initialState = {
      ...reducerState,
      imageUrl: '',
      imageId: null
    }
    expect(reducer(initialState, 
      {type: LOAD_IMAGE_SUCCESS, payload: {img: 'newUrl', id: 'id'}})).toEqual({
        ...reducerState,
        imageUrl: 'newUrl',
        imageId: 'id',
      })
  })
})

describe('test LOAD_TEMPLATE_SUCCESS action', () => {
  it('should set category data', () => {
    const initialState = {
      ...reducerState,
      category: null
    }
    expect(reducer(initialState, 
      {type: LOAD_TEMPLATE_SUCCESS, payload: 'templateData'})).toEqual({
        ...reducerState,
        category: 'templateData'
      })
  })
})

describe('test CLEAR_TEMPLATE_DATA action', () => {
  it('should set set fields to default state', () => {
    const initialState = {
      ...reducerState,
      noContent: false,
      saveSuccess: true,
    }
    expect(reducer(initialState, 
      {type: CLEAR_TEMPLATE_DATA})).toEqual({
        ...reducerState,
        noContent: true,
        saveSuccess: false,
      })
  })
})

