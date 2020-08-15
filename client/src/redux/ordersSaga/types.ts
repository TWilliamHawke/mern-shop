export const MAKE_ORDER = 'MAKE_ORDER'
export type MakeOrderAction = {
  type: typeof MAKE_ORDER
  payload: number
}

export const GET_MY_ORDERS = 'GET_MY_ORDERS'
export type GetMyOrdersAction = {
  type: typeof GET_MY_ORDERS
}

export const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
export type GetAllOrdersAction = {
  type: typeof GET_ALL_ORDERS
}

export const CANCEL_ORDER = 'CANCEL_ORDER'
export type CancelOrderAction = {
  type: typeof CANCEL_ORDER
  payload: string
}

export const ADD_TO_CART = 'ADD_TO_CART'
export type AddToCartAction = {
  type: typeof ADD_TO_CART
  payload: string
}

export const GET_CART = 'GET_CART'
export type GetCartAction = {
  type: typeof GET_CART
}

export const REMOVE_ONE = 'REMOVE_ONE'
export type RemoveOneAction = {
  type: typeof REMOVE_ONE
  payload: string
}

export const REMOVE_ALL = 'REMOVE_ALL'
export type RemoveAllAction = {
  type: typeof REMOVE_ALL
  payload: string
}