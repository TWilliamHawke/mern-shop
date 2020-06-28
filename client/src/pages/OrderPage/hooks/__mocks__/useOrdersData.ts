export const mockedCancelOrder = jest.fn()
// eslint-disable-next-line
export const useOrdersData = (all: boolean) => {
  return {
    cancelOrder: mockedCancelOrder,
    orders: []
  }
}