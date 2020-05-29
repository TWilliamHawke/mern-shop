import { LOAD_IMAGE, SAVE_TEMPLATE, LOAD_TEMPLATE, EDIT_FIELD, GET_FIELDS, ADD_FIELD, ADD_ITEM, GET_CATEGORY, GET_ITEM, EDIT_ITEM, ADD_TO_CART, GET_CART, REMOVE_ONE, REMOVE_ALL, MAKE_ORDER } from "./types";
import { tfItemData } from "../../utils/actionHelpers";


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

export const getCategory = (payload) => ({
  type: GET_CATEGORY, payload
})

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