import { useSelector, useDispatch } from "react-redux"
import { logout } from '../../redux/authSaga/actions'


export const useNavbarData = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector(store => store.orders)
  const cartSize = cart ? cart.reduce((sum, {count}) => sum + count, 0) : 0

  return {cartSize, logout: () => dispatch(logout())}

}