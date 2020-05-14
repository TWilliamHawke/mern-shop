import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SET_SUCCESS_MESSAGE, CLEAR_GLOBAL_ERRORS } from "./types"


export const fetchDataRequest = (payload) => ({
  type: FETCH_DATA_REQUEST, payload
})

export const fetchDataSuccess = () => ({
  type: FETCH_DATA_SUCCESS
})

export const fetchDataFailure = (payload) => ({
  type: FETCH_DATA_FAILURE, payload
})

export const setSuccessMessage = (payload) => {
  return {
    type: SET_SUCCESS_MESSAGE, payload
  }
}

export const clearGlobalErrors = () => ({
  type: CLEAR_GLOBAL_ERRORS
})