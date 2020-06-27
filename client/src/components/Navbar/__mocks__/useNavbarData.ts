import { LogoutAction } from "src/redux/authSaga/types"

export const mockLogout = jest.fn()
export type UseNavbarDataType = {
  cartSize: number
  logout: () => LogoutAction
}

export const useNavbarData = (): UseNavbarDataType => {
  return {
    cartSize: 42,
    logout: mockLogout,
  }
}