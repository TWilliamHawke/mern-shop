export const mockedCancelOrder = jest.fn()
export const useOrdersData = (all) => {
  return {
    cancelOrder: mockedCancelOrder,
    orders: []
  }
}