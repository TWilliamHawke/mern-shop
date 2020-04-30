import authService from './authService'
import axios from 'axios';

jest.mock('axios')


describe('sendUserData test', () => {
  beforeAll(() => {
    axios.post.mockResolvedValue('test')
  })

  afterAll(() => {
    axios.post.mockClear()
  })


  it('should call axios and return mock data', async () => {
    const response = await authService.sendUserData('someData')
    expect(axios.post.mock.calls[0][1]).toBe('someData')
    expect(response).toBe('test')
  })
})

describe('login test', () => {
  beforeAll(() => {
    axios.post.mockResolvedValue('tokens')
  })

  afterAll(() => {
    axios.post.mockClear()
  })


  it('should call axios and return mock data', async () => {
    const response = await authService.login('userData')
    expect(axios.post.mock.calls[0][1]).toBe('userData')
    expect(response).toBe('tokens')
  })
})

describe('refresh test', () => {
  beforeAll(() => {
    axios.post.mockResolvedValue('tokens')
  })

  afterAll(() => {
    axios.post.mockClear()
  })


  it('should call axios and return mock data', async () => {
    const response = await authService.refresh('userData')
    expect(axios.post.mock.calls[0][1]).toBe('userData')
    expect(response).toBe('tokens')
  })
})


