import { FETCH_CART_SUCCESS, MADE_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS, FetchOrdersActionsType, FetchOrdersSuccessAction, FetchCartSuccessAction } from "./types"
import { CartDataType, OrdersDataType } from "src/types/ordersDataTypes"


export const fetchCartSuccess = (payload: CartDataType): FetchCartSuccessAction => ({
  type: FETCH_CART_SUCCESS, payload
})

export const madeOrderSuccess = (): FetchOrdersActionsType => ({
  type: MADE_ORDER_SUCCESS
})

export const fetchOrdersSuccess = (payload: OrdersDataType): FetchOrdersSuccessAction => ({
  type: FETCH_ORDERS_SUCCESS, payload
})