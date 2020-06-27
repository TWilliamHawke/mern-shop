import { useSelector, useDispatch } from "react-redux"
import { logout } from '../../redux/authSaga/actions'
import { AppState } from "src/redux/store"
import { Orderstate } from "src/redux/ordersReducer/ordersReducer"
import { LogoutAction } from "src/redux/authSaga/types"

export type UseNavbarDataType = {
  cartSize: number
  logout: () => LogoutAction
}

export const useNavbarData = ():UseNavbarDataType => {
  const dispatch = useDispatch()
  const { cart } = useSelector<AppState, Orderstate>(store => store.orders)
  const cartSize = cart ? cart.reduce((sum, {count}) => sum + count, 0) : 0

  return {cartSize, logout: () => dispatch(logout())}

}