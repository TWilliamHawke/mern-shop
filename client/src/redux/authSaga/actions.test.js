import { createUser, loginUser, checkUserType, logout} from './actions'
import { CREATE_USER, LOGIN_USER, CHECK_USERTYPE, LOGOUT } from './types'

describe('createUser action', () => {
  it('should return CREATE_USER type', () => {
    expect(createUser('userData')).toEqual({type:CREATE_USER, payload: 'userData'})
  })
})

describe('loginUser action', () => {
  it('should return LOGIN_USER type', () => {
    expect(loginUser('userData')).toEqual({type:LOGIN_USER, payload: 'userData'})
  })
})

describe('checkUserType action', () => {
  it('should return CHECK_TOKEN type', () => {
    expect(checkUserType()).toEqual({type:CHECK_USERTYPE})
  })
})

it('should return LOGOUT type', () => {
  expect(logout('testType')).toEqual({type: LOGOUT})
})
