import { createUserRequest, logoutSaga, loginUserSaga, checkUserTypeSaga, refreshTokenSaga } from './sagas'
import { call, put } from 'redux-saga/effects'
import { authRequest, createUserSuccess, authFailure, setUserType, loginSuccess } from '../authReducer/actions'
import authService from '../../services/authService'
import storage from '../../services/storageServices'
import { logout } from './actions'
import { api } from 'src/api'

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

describe('test logout saga', () => {
  const iterator = logoutSaga()
  it('should remove data from localstorage', () => {
    expect(iterator.next().value).toEqual(call(storage.removeItem, 'userData'))
  })

  it('should call setUserType action', () => {
    expect(iterator.next().value).toEqual(put(setUserType('guest')))
  })
})

describe('test loginuser saga', () => {
  let iterator
  beforeAll(() => {
    iterator = loginUserSaga({payload: 'userData'})
  })


  it('should call auth request', () => {
    expect(iterator.next().value).toEqual(put(authRequest()))
  })

  it('should call servise function', () => {
    expect(iterator.next().value).toMatchObject(call(api.auth.login, 'userData'))
  })

  it('should set tokens to localstorage', () => {
    expect(iterator.next({data: {userType: 'testType'}}).value).toEqual(call(storage.setItem, 'userData', {userType: 'testType'}))
  })

  it('should call loginSuccess action', () => {
    expect(iterator.next().value).toEqual(put(loginSuccess('testType')))
  })

  it('should call authFailure on error', () => {
    const error = {response: {data: {}}}
    expect(iterator.throw(error).value).toEqual(put(authFailure(error.response)))
  })


})

describe('test checkUserTypeSaga', () => {
  let saga

  beforeAll(() => {
    saga = checkUserTypeSaga()
  })

  it('should call storage getitem', () => {
    expect(saga.next().value).toEqual(call(storage.getItem, 'userData'))
  })

  it('should call refresh token saga', () => {
    const userData = {userType: 'testType', tokens: {refToken: 'token'}}
    expect(saga.next(userData).value).toEqual(call(refreshTokenSaga, 'testType', 'token'))
  })

  it('should set usertype', () => {
    expect(saga.next({userType: 'someType'}).value).toEqual(put(setUserType('someType')))
  })

  it('should call logoutSaga', () => {
    const error = {response: {data: {}}}
    expect(saga.throw(error).value).toEqual(put(logout()))
  })


})