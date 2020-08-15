import { useSelector, useDispatch } from "react-redux"
import { cancelOrder, getAllOrders, getMyOrders } from 'src/redux/ordersSaga/actions'
import { useEffect } from "react"
import { AppState } from "src/redux/store"
import { Orderstate } from "src/redux/ordersReducer/ordersReducer"
import { OrdersDataType } from "src/types/ordersDataTypes"
import { CancelOrderAction } from "src/redux/ordersSaga/types"

type UseOrdersDataType = (all: boolean) => ({
  orders: OrdersDataType
  cancelOrder: (id: string) => CancelOrderAction
})


export const useOrdersData: UseOrdersDataType = (all) => {
  const { orders } = useSelector<AppState, Orderstate>(store => store.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    if(all) {
      dispatch(getAllOrders())
    } else {
      dispatch(getMyOrders())
    }
    // eslint-disable-next-line
  }, [])

  const wrappedCancelOrder = (id: string) => dispatch(cancelOrder(id))

  return {
    orders,
    cancelOrder: wrappedCancelOrder
  }

}