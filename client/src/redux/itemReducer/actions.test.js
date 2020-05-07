import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE, LOAD_IMAGE_SUCCESS } from "./types"
import {fetchItemRequest, fetchItemFailure, loadImageSuccess} from './actions'


describe('test item reducer actions', () => {
  it('should return FETCH_ITEM_REQUEST type', () => {
    expect(fetchItemRequest())
      .toEqual({type: FETCH_ITEM_REQUEST})
  })

  it('should return FETCH_ITEM_FAILURE type', () => {
    expect(fetchItemFailure('errors'))
      .toEqual({type: FETCH_ITEM_FAILURE, payload: 'errors'})
  })

  it('should return LOAD_IMAGE_SUCCESS type', () => {
    expect(loadImageSuccess('data'))
      .toEqual({type: LOAD_IMAGE_SUCCESS, payload: 'data'})
  })



})