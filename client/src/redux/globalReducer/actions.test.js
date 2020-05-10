import { fetchDataRequest, fetchDataSuccess, fetchDataFailure, setSuccessMessage } from "./actions"
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SET_SUCCESS_MESSAGE } from "./types"

describe('test global reducer actions', () => {
  it('should return FETCH_DATA_REQUEST type', () => {
    expect(fetchDataRequest('someData'))
      .toEqual({type: FETCH_DATA_REQUEST, payload: 'someData'})
  })

  it('should return FETCH_DATA_SUCCESS type', () => {
    expect(fetchDataSuccess('someData'))
      .toEqual({type: FETCH_DATA_SUCCESS})
  })

  it('should return FETCH_DATA_FAILURE type', () => {
    expect(fetchDataFailure('errorsArray'))
      .toEqual({type: FETCH_DATA_FAILURE, payload: 'errorsArray'})
  })


  it('should return SET_SUCCESS_MESSAGE type', () => {
    expect(setSuccessMessage('message'))
      .toEqual({type: SET_SUCCESS_MESSAGE, payload: 'message'})
  })
})