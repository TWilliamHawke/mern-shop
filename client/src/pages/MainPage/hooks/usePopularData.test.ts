import { usePopularData } from './usePopularData'
import { renderHook } from '@testing-library/react-hooks'
import { getPopular } from 'src/redux/itemSaga/actions'
import { useSelector } from 'react-redux'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => ({
    popular: 'popdata'
  })),
  useDispatch: jest.fn(() => mockDispatch)
}))

//(useSelector as jest.Mock).mockImplementation()

it('should return popdata', () => {
  (useSelector as jest.Mock)
    .mockImplementationOnce(() => ({popular: 'nodata'}))
    .mockImplementationOnce(() => ({popular: 'popdata'}))

  const { result, rerender } = renderHook(() => usePopularData())
  
  expect(result.current.popular).toBe('nodata')
  rerender()
  expect(result.current.popular).toBe('popdata')
})

it('should call getPopular', () => {
  renderHook(() => usePopularData())
  expect(mockDispatch.mock.calls[0][0]).toEqual(getPopular())
})