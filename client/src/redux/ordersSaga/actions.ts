import { MAKE_ORDER, GET_ALL_ORDERS, GET_MY_ORDERS, CANCEL_ORDER, MakeOrderAction, GetMyOrdersAction, GetAllOrdersAction, CancelOrderAction, AddToCartAction, ADD_TO_CART, GetCartAction, GET_CART, RemoveOneAction, REMOVE_ONE, RemoveAllAction, REMOVE_ALL } from "./types";


export const makeOrder = (payload: number): MakeOrderAction => ({
  type: MAKE_ORDER, payload
})

export const getMyOrders = (): GetMyOrdersAction => ({
  type: GET_MY_ORDERS
})

export const getAllOrders = (): GetAllOrdersAction => ({
  type: GET_ALL_ORDERS
})

export const cancelOrder = (payload: string): CancelOrderAction => ({
  type: CANCEL_ORDER, payload
})

export const addToCart = (payload: string): AddToCartAction => ({
  type: ADD_TO_CART, payload
})

export const getCart = (): GetCartAction => ({
  type: GET_CART
})

export const removeOne = (payload: string): RemoveOneAction => ({
  type: REMOVE_ONE, payload
})

export const removeAll = (payload: string): RemoveAllAction => ({
  type: REMOVE_ALL, payload
})

