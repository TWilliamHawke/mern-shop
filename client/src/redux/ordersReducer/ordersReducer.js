import { NEW_ITEM_IN_CART } from "./types"


export const initialState = {
  cart: [],
  orders: [],
  newItemsCount: 0,
}

const handlers = {
  default: state => state,
  [NEW_ITEM_IN_CART]: state => ({
    ...state,
    newItemsCount: ++state.newItemsCount
  })
}


const ordersReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}

export default ordersReducer