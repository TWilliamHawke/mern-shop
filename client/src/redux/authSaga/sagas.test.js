import { createUserRequest } from './sagas'
import { call, put } from 'redux-saga/effects'
import { authRequest, createUserSuccess, authFailure } from '../authReducer/actions'
import authService from '../../services/authService'



describe('test user createUserRequest acion', () => {
  const iterator = createUserRequest({payload: 'someData'})
  //const {sendUserData} = getAuthService()

  it('should call auth request', () => {
    expect(iterator.next().value).toEqual(put(authRequest()))
  })

  it('should call servise function', () => {
    expect(iterator.next().value).toMatchObject(call(authService.sendUserData, 'someData'))
  })

  it('should call createUserSuccess acion', () => {
    expect(iterator.next().value).toEqual(put(createUserSuccess()))
  })

  it('should call authFailure on error', () => {
    const error = {response: {data: {}}}
    expect(iterator.throw(error).value).toEqual(put(authFailure(error.response)))
  })
})