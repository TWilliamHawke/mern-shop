import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE, LOAD_IMAGE_SUCCESS, LOAD_TEMPLATE_SUCCESS } from "./types"

export const fetchItemRequest = () => ({
  type: FETCH_ITEM_REQUEST
})

export const fetchItemFailure = (payload) => ({
  type: FETCH_ITEM_FAILURE, payload
})

export const loadImageSuccess = (payload) => ({
  type: LOAD_IMAGE_SUCCESS, payload
})

export const loadtemplateSuccess = (payload) => ({
  type: LOAD_TEMPLATE_SUCCESS, payload
})