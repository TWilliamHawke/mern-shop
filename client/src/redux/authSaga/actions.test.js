import { createUser, loginUser} from './actions'
import { CREATE_USER, LOGIN_USER } from './types'

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