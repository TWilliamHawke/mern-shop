import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from "./actions"
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./types"

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
})