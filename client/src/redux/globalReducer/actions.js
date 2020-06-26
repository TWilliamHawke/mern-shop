import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, CLEAR_GLOBAL_ERRORS, FETCH_POPULAR_SUCCESS } from "./types"


export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
})

export const fetchDataSuccess = () => ({
  type: FETCH_DATA_SUCCESS
})

export const fetchDataFailure = (payload) => ({
  type: FETCH_DATA_FAILURE, payload
})

export const clearGlobalErrors = () => ({
  type: CLEAR_GLOBAL_ERRORS
})

export const fetchPopularSuccess = (payload) => ({
  type: FETCH_POPULAR_SUCCESS, payload
})