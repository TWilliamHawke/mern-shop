import reducer, {initialState as reducerState} from './itemReducer'
import { LOAD_CATEGORY_SUCCESS, LOAD_ITEM_SUCCESS, FETCH_FILTERS_SUCCESS } from './types'



describe('test LOAD_CATEGORY_SUCCESS action', () => {
  it('should and set category data', () => {
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

describe('test LOAD_ITEM_SUCCESS action', () => {
  it('should and set itemData', () => {
    const initialState = {
      ...reducerState,
      itemData: null,
    }
    expect(reducer(initialState, 
      {type: LOAD_ITEM_SUCCESS, payload: 'iData'})).toEqual({
        ...reducerState,
        itemData: 'iData',
      })
  })
})

describe('test FETCH_FILTERS_SUCCESS action', () => {
  it('should set filters and category data', () => {
    const initialState = {
      ...reducerState,
      filters: [],
    }
    expect(reducer(initialState, 
      {type: FETCH_FILTERS_SUCCESS, payload: {filters: 'filters', categoryData: 'itemsArray'}})).toEqual({
        ...reducerState,
        filters: 'filters',
        categoryData: 'itemsArray'
      })
  })
})


