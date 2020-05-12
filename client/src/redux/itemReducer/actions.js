import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE } from "./types"

export const fetchItemRequest = () => ({
  type: FETCH_ITEM_REQUEST
})

export const fetchItemFailure = (payload) => ({
  type: FETCH_ITEM_FAILURE, payload
})
