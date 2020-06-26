import { LOAD_CATEGORY_SUCCESS, LOAD_ITEM_SUCCESS, FETCH_FILTERS_SUCCESS, CLEAR_FILTERS, CLEAR_ITEMDATA } from "./types"

export const loadCategorySuccess = (payload) => ({
  type: LOAD_CATEGORY_SUCCESS, payload
})

export const loadItemSuccess = (payload) => ({
  type: LOAD_ITEM_SUCCESS, payload
})

export const fetchFiltersSuccess = payload => ({
  type: FETCH_FILTERS_SUCCESS, payload
})

export const clearFilters = () => ({
  type: CLEAR_FILTERS
})

export const clearItemData = () => ({
  type: CLEAR_ITEMDATA
})