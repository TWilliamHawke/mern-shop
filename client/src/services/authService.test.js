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


