import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE, LOAD_CATEGORY_SUCCESS, LOAD_ITEM_SUCCESS, SET_FILTERS, FETCH_FILTERS_SUCCESS } from "./types"

export const fetchItemRequest = () => ({
  type: FETCH_ITEM_REQUEST
})

export const fetchItemFailure = (payload) => ({
  type: FETCH_ITEM_FAILURE, payload
})

export const loadCategorySuccess = (payload) => ({
  type: LOAD_CATEGORY_SUCCESS, payload
})

export const loadItemSuccess = (payload) => ({
  type: LOAD_ITEM_SUCCESS, payload
})


export const fetchFiltersSuccess = payload => ({
  type: FETCH_FILTERS_SUCCESS, payload
})

export const setFilters = payload => ({
  type: SET_FILTERS, payload
})