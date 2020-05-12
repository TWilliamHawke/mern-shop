import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE } from "./types"
import {fetchItemRequest, fetchItemFailure } from './actions'


describe('test item reducer actions', () => {
  it('should return FETCH_ITEM_REQUEST type', () => {
    expect(fetchItemRequest())
      .toEqual({type: FETCH_ITEM_REQUEST})
  })

  it('should return FETCH_ITEM_FAILURE type', () => {
    expect(fetchItemFailure('errors'))
      .toEqual({type: FETCH_ITEM_FAILURE, payload: 'errors'})
  })



})