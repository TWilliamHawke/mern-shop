import { NEW_ITEM_IN_CART, FETCH_CART_SUCCESS } from "./types"

export const newItemInCart = () => ({
  type: NEW_ITEM_IN_CART
})

export const fetchCartSuccess = (payload) => ({
  type: FETCH_CART_SUCCESS, payload
})