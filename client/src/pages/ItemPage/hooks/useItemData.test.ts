import { useItemData } from './useItemData'
import { renderHook } from '@testing-library/react-hooks'
import { clearItemData } from 'src/redux/itemReducer/actions'


const historyPushMock = jest.fn()
const dispatchMock = jest.fn()

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: historyPushMock}),
  useParams: () => ({ name: 'test'})
}))
jest.mock('react-redux', () => ({
  useDispatch: () => dispatchMock,
  useSelector: () => ({
    loading: true,
    itemData: {popular: true}
  })
}))

jest.mock('src/hooks/useUserType', () => () => ({ isGuest: true}))

describe('returning data test', () => {
  afterAll(() => {
    dispatchMock.mockClear()
  })


  const { result, unmount } = renderHook(() => useItemData())
  
  it('should return data', () => {
    expect(result.current.loading).toBe(true)
    expect(result.current.itemData).toEqual({popular: true})
    expect(result.current.popularHandler).toBeInstanceOf(Function)
    expect(result.current.addToCartHandler).toBeInstanceOf(Function)
    expect(result.current.gotoEditItem).toBeInstanceOf(Function)
  })

  unmount()

  it('should call dismount effect', () => {
    expect(dispatchMock.mock.calls[1][0]).toEqual(clearItemData())
  })

  it('should call history call', () => {
    result.current.gotoEditItem()
    expect(historyPushMock).toBeCalled()
  })
})