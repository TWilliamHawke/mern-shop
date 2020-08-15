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