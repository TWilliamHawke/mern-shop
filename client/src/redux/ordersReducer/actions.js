import { NEW_ITEM_IN_CART, FETCH_CART_SUCCESS, MADE_ORDER_SUCCESS } from "./types"

export const newItemInCart = () => ({
  type: NEW_ITEM_IN_CART
})

export const fetchCartSuccess = (payload) => ({
  type: FETCH_CART_SUCCESS, payload
})

export const madeOrderSuccess = (payload) => ({
  type: MADE_ORDER_SUCCESS, payload
})