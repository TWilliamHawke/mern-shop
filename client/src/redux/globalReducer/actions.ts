import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, CLEAR_GLOBAL_ERRORS, FETCH_POPULAR_SUCCESS, FetchDataRequestAction, FetchDataSuccessAction, FetchDataFailureAction, ClearGlobalErrorsAction, FetchPopulatSuccessAction } from "./types"
import { ErrorOutputType } from "src/types/authDataTypes"
import { CategoryDataType } from "src/types/itemsDataType"


export const fetchDataRequest = (): FetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (): FetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS
})

export const fetchDataFailure = (payload: ErrorOutputType): FetchDataFailureAction => ({
  type: FETCH_DATA_FAILURE, payload
})

export const clearGlobalErrors = (): ClearGlobalErrorsAction => ({
  type: CLEAR_GLOBAL_ERRORS
})

export const fetchPopularSuccess = (payload: CategoryDataType): FetchPopulatSuccessAction => ({
  type: FETCH_POPULAR_SUCCESS, payload
})