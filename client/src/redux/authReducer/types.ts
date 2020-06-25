import { ErrorOutputType, UsertypeType } from "src/types/authDataTypes"

export const AUTH_REQUEST = 'AUTH_REQUEST'
export type AuthRequestType = {
  type: typeof AUTH_REQUEST
}

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST'
export type CreateUserType = {
  type: typeof CREATE_USER_REQUEST
}

export const AUTH_FAILURE = 'AUTH_FAILURE'
export type AuthFailureType = {
  type: typeof AUTH_FAILURE
  payload: ErrorOutputType
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export type LoginSuccessType = {
  type: typeof LOGIN_SUCCESS,
  payload: UsertypeType
}

export const HIDE_SUCCESS_MESSAGE = 'HIDE_SUCCESS_MESSAGE'
export type HideSuccessMessageType = {
  type: typeof HIDE_SUCCESS_MESSAGE
}

export const REDIRECT_SUCCESS = 'REDIRECT_SUCCESS'
export type RedirectSuccessType = {
  type: typeof REDIRECT_SUCCESS
}

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export type CreateUserSuccessType = {
  type: typeof CREATE_USER_SUCCESS
}
export const SET_USERTYPE = 'SET_USERTYPE'
export type SetUsertypeType = {
  type: typeof SET_USERTYPE,
  payload: UsertypeType
}

export type AuthFetchActionTypes = 
  | AuthRequestType
  | CreateUserType
  | AuthFailureType
  | LoginSuccessType
  | HideSuccessMessageType
  | RedirectSuccessType
  | CreateUserSuccessType
  | SetUsertypeType