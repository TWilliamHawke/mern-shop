import { FETCH_CART_SUCCESS, MADE_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS, FetchOrdersActionsType } from "./types"
import { CartDataType, OrdersDataType } from "src/types/ordersDataTypes"

export type Orderstate = {
  cart: null | CartDataType
  orders: OrdersDataType
}

export const initialState: Orderstate = {
  cart: null,
  orders: [],
}

const ordersReducer = (state = initialState, action: FetchOrdersActionsType): Orderstate => {

  switch (action.type) {
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      }
    case MADE_ORDER_SUCCESS:
      return {
        ...state,
        cart: []
      }
    case FETCH_ORDERS_SUCCESS:
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