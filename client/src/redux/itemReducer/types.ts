import { CategoryDataType, ItemDataType, FetchFiltersType } from "src/types/itemsDataType"

export const LOAD_CATEGORY_SUCCESS = 'LOAD_CATEGORY_SUCCESS'
export type LoadCategorySuccessAction = {
  type: typeof LOAD_CATEGORY_SUCCESS
  payload: CategoryDataType
}

export const LOAD_ITEM_SUCCESS = 'LOAD_ITEM_SUCCESS'
export type LoadItemSuccessAction = {
  type: typeof LOAD_ITEM_SUCCESS
  payload: ItemDataType
}

export const FETCH_FILTERS_SUCCESS = 'FETCH_FILTERS_SUCCESS'
export type FetchFiltersSuccessAction = {
  type: typeof FETCH_FILTERS_SUCCESS
  payload: FetchFiltersType
}

export const CLEAR_FILTERS = 'CLEAR_FILTERS'
export type ClearFiltersAction = {
  type: typeof CLEAR_FILTERS
}

export const CLEAR_ITEMDATA = 'CLEAR_ITEMDATA'
export type ClearItemdataAction = {
  type: typeof CLEAR_ITEMDATA
}

export type FetchItemsActionsType = 
  | LoadCategorySuccessAction
  | LoadItemSuccessAction
  | FetchFiltersSuccessAction
  | ClearFiltersAction
  | ClearItemdataAction