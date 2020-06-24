
export const mockLogout = jest.fn()
export const useNavbarData = () => {
  return {
    cartSize: 'size',
    logout: mockLogout,
  }
}