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

export const GET_CATEGORY = 'GET_CATEGORY'
export type GetCategoryAction = {
  type: typeof GET_CATEGORY
  payload: string
}

export const GET_ITEM = 'GET_ITEM'
export type GetItemAction = {
  type: typeof GET_ITEM
  payload: string
}

export const EDIT_ITEM = 'EDIT_ITEM'
export type EditItemAction = {
  type: typeof EDIT_ITEM
  payload: TfItemDataOutput
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

export const GET_FILTERS = 'GET_FILTERS'
export type GetFiltersAction = {
  type: typeof GET_FILTERS
  payload: string
}

export const ADD_POPULAR = 'ADD_POPULAR'
export type AddPopularAction = {
  type: typeof ADD_POPULAR
  payload: string
}

export const REMOVE_POPULAR = 'REMOVE_POPULAR'
export type RemovePopularAction = {
  type: typeof REMOVE_POPULAR
  payload:string
}

export const GET_POPULAR = 'GET_POPULAR'
export type GetPopularAction = {
  type: typeof GET_POPULAR
}