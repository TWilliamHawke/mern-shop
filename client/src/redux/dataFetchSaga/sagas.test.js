import { fetchSaga } from "./sagas"
import { put, call } from 'redux-saga/effects'
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../globalReducer/types"
import { getTokenSaga } from "../authSaga/sagas"
import { transformErrors } from "../../utils/actionHelpers"

describe('testing fetchsaga', () => {
  const action = jest.fn(payload => ({type: 'someType', payload}))
  const service = jest.fn()
  let saga

  beforeAll(() => {
    saga = fetchSaga(action, service)({payload: 'someData'})
  })

  it('should put first action', () => {
    expect(saga.next().value).toEqual(put({type: FETCH_DATA_REQUEST}))
  })

  it('should call get token saga', () => {
    expect(saga.next().value).toEqual(call(getTokenSaga))
  })

  it('should call service with token and payload', () => {
    expect(saga.next('token').value).toEqual(call(service, 'token', 'someData'))
  })

  it('should put action with fetch result', () => {
    expect(saga.next({data: 'responceData'}).value).toEqual(put(action('responceData')))
  })

  it('should put success action', () => {
    expect(saga.next().value).toEqual(put({type: FETCH_DATA_SUCCESS}))
  })

  it('should call transformErrors with error responce', () => {
    const error = {response: {data: {}}}
    expect(saga.throw(error).value).toEqual(call(transformErrors, error.response))
  })

  it('should put failure action', () => {
    expect(saga.next('errorsArray').value).toEqual(put({type: FETCH_DATA_FAILURE, payload: 'errorsArray'}))
  })

})