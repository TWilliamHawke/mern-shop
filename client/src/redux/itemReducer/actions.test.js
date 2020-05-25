import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE, LOAD_CATEGORY_SUCCESS, LOAD_ITEM_SUCCESS } from "./types"
import {fetchItemRequest, fetchItemFailure, loadCategorySuccess, loadItemSuccess } from './actions'


describe('test item reducer actions', () => {
  it('should return FETCH_ITEM_REQUEST type', () => {
    expect(fetchItemRequest())
      .toEqual({type: FETCH_ITEM_REQUEST})
  })

  it('should return FETCH_ITEM_FAILURE type', () => {
    expect(fetchItemFailure('errors'))
      .toEqual({type: FETCH_ITEM_FAILURE, payload: 'errors'})
  })

  it('should return LOAD_CATEGORY_SUCCESS type', () => {
    expect(loadCategorySuccess('data'))
      .toEqual({type: LOAD_CATEGORY_SUCCESS, payload: 'data'})
  })

  it('should return LOAD_ITEM_SUCCESS type', () => {
    expect(loadItemSuccess('data'))
      .toEqual({type: LOAD_ITEM_SUCCESS, payload: 'data'})
  })



})