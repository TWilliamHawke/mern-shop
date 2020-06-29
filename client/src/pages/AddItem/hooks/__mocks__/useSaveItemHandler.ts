
export const saveMock = jest.fn()
// eslint-disable-next-line
export const useSaveItemHandler = () => ({
  saveItemHandler: saveMock
})