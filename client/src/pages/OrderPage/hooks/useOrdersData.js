import { useSelector, useDispatch } from "react-redux"
import { getAllOrders, getMyOrders } from 'src/redux/dataFetchSaga/actions'
import { cancelOrder } from 'src/redux/dataFetchSaga/actions'
import { useEffect } from "react"


export const useOrdersData = (all) => {
  const { orders } = useSelector(store => store.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    if(all) {
      dispatch(getAllOrders())
    } else {
      dispatch(getMyOrders())
    }
    // eslint-disable-next-line
  }, [])

  const wrappedCancelOrder = id => dispatch(cancelOrder(id))

  return {
    orders,
    cancelOrder: wrappedCancelOrder
  }

}