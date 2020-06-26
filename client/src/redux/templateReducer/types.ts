import { FetchFieldsType, FetchImageData, FetchTemplateType } from "src/types/templateDataType"

export const ADD_FIELD_SUCCESS = 'ADD_FIELD_SUCCESS'
export type AddFieldSuccessAction = {
  type: typeof ADD_FIELD_SUCCESS
}

export const GET_FIELDS_SUCCESS = 'GET_FIELDS_SUCCESS'
export type GetFielsSuccessAction = {
  type: typeof GET_FIELDS_SUCCESS
  payload: FetchFieldsType
}

export const SAVE_TEMPLATE_SUCCESS = 'SAVE_TEMPLATE_SUCCESS'
export type SaveTemplateSuccessAction = {
  type: typeof SAVE_TEMPLATE_SUCCESS
}

export const SAVE_TEMPLATE_REDIRRECT = 'SAVE_TEMPLATE_REDIRRECT'
export type SaveTemplateRedirrectAction = {
  type: typeof SAVE_TEMPLATE_REDIRRECT
}

export const LOAD_IMAGE_SUCCESS = 'LOAD_IMAGE_SUCCESS'
export type LoadImageSuccessAction = {
  type: typeof LOAD_IMAGE_SUCCESS
  payload: FetchImageData
}

export const LOAD_TEMPLATE_SUCCESS = 'LOAD_TEMPLATE_SUCCESS'
export type LoadTemplateSuccessAction = {
  type: typeof LOAD_TEMPLATE_SUCCESS
  payload: FetchTemplateType
}

export const CLEAR_TEMPLATE_DATA = 'CLEAR_TEMPLATE_DATA'
export type ClearTemplateDataAction = {
  type: typeof CLEAR_TEMPLATE_DATA
}

export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'
export type AddItemSuccessAction = {
  type: typeof ADD_ITEM_SUCCESS
}

export type FetchTemplateActionsType =
  | AddFieldSuccessAction
  | GetFielsSuccessAction
  | SaveTemplateSuccessAction
  | SaveTemplateRedirrectAction
  | LoadImageSuccessAction
  | LoadTemplateSuccessAction
  | ClearTemplateDataAction
  | AddItemSuccessAction