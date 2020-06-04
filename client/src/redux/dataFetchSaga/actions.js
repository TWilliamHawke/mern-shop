import { LOAD_IMAGE, SAVE_TEMPLATE, LOAD_TEMPLATE, EDIT_FIELD, GET_FIELDS, ADD_FIELD, ADD_ITEM, GET_CATEGORY, GET_ITEM, EDIT_ITEM, ADD_TO_CART, GET_CART, REMOVE_ONE, REMOVE_ALL, MAKE_ORDER, GET_ALL_ORDERS, GET_MY_ORDERS, CANCEL_ORDER, GET_FILTERS, ADD_POPULAR, REMOVE_POPULAR, GET_POPULAR } from "./types";
import { tfItemData, tfFilterToString } from "../../utils/actionHelpers";


export const loadImage = (payload) => ({
  type: LOAD_IMAGE, payload
})

export const saveTemplate = (payload) => ({
  type: SAVE_TEMPLATE, payload
})

export const loadTemplate = (payload) => ({
  type: LOAD_TEMPLATE, payload
})

export const editField = (payload) => ({
  type: EDIT_FIELD, payload
})

export const addField = (payload) => ({
  type: ADD_FIELD, payload
})

export const getFields = (payload) => ({
  type: GET_FIELDS, payload
})

export const addItem = (data) => {
  const payload = tfItemData(data)
  return {
    type: ADD_ITEM, payload
  }
}

export const getCategory = (data) => {
  const payload = tfFilterToString(data)
  return {
    type: GET_CATEGORY, payload
  }
}

export const getItem = (payload) => ({
  type: GET_ITEM, payload
})

export const editItem = (data) => {
  const payload = tfItemData(data)
  return {
    type: EDIT_ITEM, payload
  }
}

export const addToCart = (payload) => ({
  type: ADD_TO_CART, payload
})

export const getCart = () => ({
  type: GET_CART
})

export const removeOne = (payload) => ({
  type: REMOVE_ONE, payload
})

export const removeAll = payload => ({
  type: REMOVE_ALL, payload
})

export const makeOrder = payload => ({
  type: MAKE_ORDER, payload
})

export const getMyOrders = () => ({
  type: GET_MY_ORDERS
})

export const getAllOrders = () => ({
  type: GET_ALL_ORDERS
})

export const cancelOrder = payload => ({
  type: CANCEL_ORDER, payload
})

export const getFilters = payload => ({
  type: GET_FILTERS, payload
})

export const addPopular = payload => ({
  type: ADD_POPULAR, payload
})

export const removePoupular = payload => ({
  type: REMOVE_POPULAR, payload
})

export const getPopular = () => ({
  type: GET_POPULAR
})