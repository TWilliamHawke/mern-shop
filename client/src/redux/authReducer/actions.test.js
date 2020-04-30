import { authRequest, loginSuccess, authFailure, createUserSuccess, redirectSuccess, hideSuccessMessage, setUserType } from "./actions"
import { AUTH_REQUEST, LOGIN_SUCCESS, AUTH_FAILURE, CREATE_USER_SUCCESS, HIDE_SUCCESS_MESSAGE, REDIRECT_SUCCESS, SET_USERTYPE } from "./types"
import { transformErrors } from './utils/transformErrors'

jest.mock('./utils/transformErrors')

describe('auth reducer actions test', () => {
  it('should return AUTH_REQUEST type', () => {
    expect(authRequest()).toEqual({type: AUTH_REQUEST})
  })

  it('should return LOGIN_SUCCESS type', () => {
    expect(loginSuccess('data')).toEqual({type: LOGIN_SUCCESS, payload: 'data'})
  })

  it('should return CREATE_USER_SUCCESS type', () => {
    expect(createUserSuccess()).toEqual({type: CREATE_USER_SUCCESS})
  })

  it('should return AUTH_FAILURE type', () => {
    transformErrors.mockImplementation(() => 'errorsArray')
    expect(authFailure('errors')).toEqual({type: AUTH_FAILURE, payload: 'errorsArray'})
    expect(transformErrors).toBeCalledWith('errors')
  })

  it('should return HIDE_SUCCESS_MESSAGE type', () => {
    expect(hideSuccessMessage()).toEqual({type: HIDE_SUCCESS_MESSAGE})
  })

  it('should return REDIRECT_SUCCESS type', () => {
    expect(redirectSuccess()).toEqual({type: REDIRECT_SUCCESS})
  })

  it('should return SET_USERTYPE type', () => {
    expect(setUserType('testType')).toEqual({type: SET_USERTYPE, payload: 'testType'})
  })

})