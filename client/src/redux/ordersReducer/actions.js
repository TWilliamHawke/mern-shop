import { NEW_ITEM_IN_CART, FETCH_CART_SUCCESS, MADE_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS } from "./types"

export const newItemInCart = () => ({
  type: NEW_ITEM_IN_CART
})

export const fetchCartSuccess = (payload) => ({
  type: FETCH_CART_SUCCESS, payload
})

export const madeOrderSuccess = () => ({
  type: MADE_ORDER_SUCCESS
})

export const fetchOrdersSuccess = (payload) => ({
  type: FETCH_ORDERS_SUCCESS, payload
})