import { FETCH_CART_SUCCESS, MADE_ORDER_SUCCESS } from "./types"


export const initialState = {
  cart: null,
  orders: [],
}

const handlers = {
  default: state => state,
  [FETCH_CART_SUCCESS]: (state, payload) => ({
    ...state,
    cart: payload,
  }),
  [MADE_ORDER_SUCCESS]: (state) => ({
    ...state,
    cart: []
  })
}


const ordersReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}

export default ordersReducer