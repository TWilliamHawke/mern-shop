import { FETCH_CART_SUCCESS } from "./types"


export const initialState = {
  cart: null,
  orders: [],
}

const handlers = {
  default: state => state,
  [FETCH_CART_SUCCESS]: (state, payload) => ({
    ...state,
    cart: payload,
  })
}


const ordersReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}

export default ordersReducer