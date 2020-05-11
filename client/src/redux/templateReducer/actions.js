import { TEMPLATE_REQUEST, TEMPLATE_FAILURE, ADD_FIELD_SUCCESS, GET_FIELDS_SUCCESS, LOAD_CONTENT, SAVE_TEMPLATE_SUCCESS, SAVE_TEMPLATE_REDIRRECT } from "./types"


export const templateRequest = () => ({
  type:TEMPLATE_REQUEST
})

export const templateFailure = (payload) => ({
  type: TEMPLATE_FAILURE, payload
})

export const addFieldSuccess = () => ({
  type: ADD_FIELD_SUCCESS
})

export const getFieldsSuccess = (payload) => ({
  type: GET_FIELDS_SUCCESS, payload
})

export const loadContent = () => ({
  type: LOAD_CONTENT
})

export const saveTemplateSuccess = () => ({
  type: SAVE_TEMPLATE_SUCCESS
})

export const saveTemplateRedirrect = () => ({
  type: SAVE_TEMPLATE_REDIRRECT
})