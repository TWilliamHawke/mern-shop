import { ADD_FIELD_SUCCESS, GET_FIELDS_SUCCESS, SAVE_TEMPLATE_SUCCESS, SAVE_TEMPLATE_REDIRRECT, LOAD_TEMPLATE_SUCCESS, LOAD_IMAGE_SUCCESS, CLEAR_TEMPLATE_DATA } from "./types"


export const addFieldSuccess = () => ({
  type: ADD_FIELD_SUCCESS
})

export const getFieldsSuccess = (payload) => ({
  type: GET_FIELDS_SUCCESS, payload
})

export const saveTemplateSuccess = () => ({
  type: SAVE_TEMPLATE_SUCCESS
})

export const saveTemplateRedirrect = () => ({
  type: SAVE_TEMPLATE_REDIRRECT
})

export const loadImageSuccess = (payload) => ({
  type: LOAD_IMAGE_SUCCESS, payload
})

export const loadTemplateSuccess = (payload) => ({
  type: LOAD_TEMPLATE_SUCCESS, payload
})

export const clearTemplateData = () => ({
  type: CLEAR_TEMPLATE_DATA
})