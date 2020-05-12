import { LOAD_IMAGE, SAVE_TEMPLATE, LOAD_TEMPLATE, EDIT_FIELD, GET_FIELDS, ADD_FIELD } from "./types";


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