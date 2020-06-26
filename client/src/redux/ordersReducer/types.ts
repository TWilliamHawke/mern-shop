import { CartDataType, OrdersDataType } from "src/types/ordersDataTypes"

export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS'
export type FetchCartSuccessAction = {
  type: typeof FETCH_CART_SUCCESS,
  payload: CartDataType
}
export const MADE_ORDER_SUCCESS = 'MADE_ORDER_SUCCESS'
export type MadeOrderSuccessAction = {
  type: typeof MADE_ORDER_SUCCESS
}
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'
export type FetchOrdersSuccessAction = {
  type: typeof FETCH_ORDERS_SUCCESS
  payload: OrdersDataType
}

export type FetchOrdersActionsType = 
  | FetchCartSuccessAction
  | MadeOrderSuccessAction
  | FetchOrdersSuccessAction