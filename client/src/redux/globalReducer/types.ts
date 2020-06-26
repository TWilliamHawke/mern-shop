import { ErrorOutputType } from "src/types/authDataTypes"
import { CategoryDataType } from "src/types/itemsDataType"

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export type FetchDataRequestAction = {
  type: typeof FETCH_DATA_REQUEST
}

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export type FetchDataSuccessAction = {
  type: typeof FETCH_DATA_SUCCESS
}

export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
export type FetchDataFailureAction = {
  type: typeof FETCH_DATA_FAILURE
  payload: ErrorOutputType
}
export const CLEAR_GLOBAL_ERRORS = 'CLEAR_GLOBAL_ERRORS'
export type ClearGlobalErrorsAction = {
  type: typeof CLEAR_GLOBAL_ERRORS
}

export const FETCH_POPULAR_SUCCESS = 'FETCH_POPULAR_SUCCESS'
export type FetchPopulatSuccessAction = {
  type: typeof FETCH_POPULAR_SUCCESS
  payload: CategoryDataType
}

export type GlobalDataActionsType =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction
  | ClearGlobalErrorsAction
  | FetchPopulatSuccessAction