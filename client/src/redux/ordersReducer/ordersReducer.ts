import * as types from "./types"
import { CartDataType, OrdersDataType } from "src/types/ordersDataTypes"

export type Orderstate = {
  cart: null | CartDataType
  orders: OrdersDataType
}

export const initialState: Orderstate = {
  cart: null,
  orders: [],
}

const ordersReducer = (state = initialState, action: types.FetchOrdersActionsType): Orderstate => {

  switch (action.type) {
    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      }
    case types.MADE_ORDER_SUCCESS:
      return {
        ...state,
        cart: []
      }
    case types.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload
      }
  
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const x: never = action
  }

  return state
}

export default ordersReducer