import { useSelector, useDispatch } from "react-redux"
import { AppState } from "src/redux/store"
import { Orderstate } from "src/redux/ordersReducer/ordersReducer"
import { GlobalStore } from "src/redux/globalReducer/globalReducer"
import { CartDataType } from "src/types/ordersDataTypes"
import { useEffect } from "react"
import { getCart } from "src/redux/ordersSaga/actions"

export type UseCartDataType = {
  cart: CartDataType | null
  loading: boolean
}


export const useCartData = (): UseCartDataType => {
  const { loading } = useSelector<AppState, GlobalStore>(store => store.global)
  const { cart } = useSelector<AppState, Orderstate>(store => store.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart())
    // eslint-disable-next-line
  }, [])



  return {
    cart,
    loading
  }
}