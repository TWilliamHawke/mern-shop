import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE, LOAD_CATEGORY_SUCCESS } from "./types"

export const fetchItemRequest = () => ({
  type: FETCH_ITEM_REQUEST
})

export const fetchItemFailure = (payload) => ({
  type: FETCH_ITEM_FAILURE, payload
})

export const loadCategorySuccess = (payload) => ({
  type: LOAD_CATEGORY_SUCCESS, payload
})