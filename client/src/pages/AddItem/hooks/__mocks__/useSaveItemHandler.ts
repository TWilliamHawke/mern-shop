
export const saveMock = jest.fn()
export const useSaveItemHandler = () => ({
  saveItemHandler: saveMock
})