import { SaveTemplateData, EditFieldData } from "src/types/fetchDataTypes"
import { TfItemDataOutput } from "src/types/actionHelpersTypes"

export const LOAD_IMAGE = 'LOAD_IMAGE'
export type LoadImageAction = {
  type: typeof LOAD_IMAGE
  payload: FormData
}

export const SAVE_TEMPLATE = 'SAVE_TEMPLATE'
export type SaveTemplateAction = {
  type: typeof SAVE_TEMPLATE
  payload: SaveTemplateData
}

export const EDIT_FIELD = 'EDIT_FIELD'
export type EditFieldAction = {
  type: typeof EDIT_FIELD
  payload: EditFieldData
}

export const LOAD_TEMPLATE = 'LOAD_TEMPLATE'
export type LoadTemplateAction = {
  type: typeof LOAD_TEMPLATE
  payload: {
    cat: string
    item: string
  }
}

export const ADD_FIELD = 'ADD_FIELD'
export type AddFieldAction = {
  type: typeof ADD_FIELD
  payload: EditFieldData
}

export const GET_FIELDS = 'GET_FIELDS'
export type GetFieldsAction = {
  type: typeof GET_FIELDS
  payload: string
}

export const ADD_ITEM = 'ADD_ITEM'
export type AddItemAction = {
  type: typeof ADD_ITEM
  payload: TfItemDataOutput
}

export const EDIT_ITEM = 'EDIT_ITEM'
export type EditItemAction = {
  type: typeof EDIT_ITEM
  payload: TfItemDataOutput
}
