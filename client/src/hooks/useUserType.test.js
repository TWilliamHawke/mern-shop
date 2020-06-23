import useUserType from './useUserType';
import { useSelector } from 'react-redux'

jest.mock('react-redux')

describe('test of isAdmin', () => {
  beforeAll(() => {
    useSelector.mockImplementation(() => ({userType: 'admin'}))
  })

  afterAll(() => {
    useSelector.mockClear()
  })

  const result = {
    isGuest: false,
    isAdmin: true,
    isUser: false,
    isAuthorise: true,
  }
  
  it('should return result', () => {
    expect(useUserType()).toEqual(result)
  })
  
})

describe('test of isUser', () => {
  beforeAll(() => {
    useSelector.mockImplementation(() => ({userType: 'user'}))
  })

  afterAll(() => {
    useSelector.mockClear()
  })

  const result = {
    isGuest: false,
    isAdmin: false,
    isUser: true,
    isAuthorise: true,
}
  
  it('should return result', () => {
    expect(useUserType()).toEqual(result)
  })
})

describe('test of isGuest', () => {
  beforeAll(() => {
    useSelector.mockImplementation(() => ({userType: 'guest'}))
  })

  afterAll(() => {
    useSelector.mockClear()
  })

  const result = {
    isGuest: true,
    isAdmin: false,
    isUser: false,
    isAuthorise: false,
}
  
  it('should return result', () => {
    expect(useUserType()).toEqual(result)
  })
  
})