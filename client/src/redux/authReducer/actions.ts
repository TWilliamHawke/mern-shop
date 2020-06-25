import { AUTH_REQUEST, LOGIN_SUCCESS, AUTH_FAILURE, CREATE_USER_SUCCESS, CREATE_USER_REQUEST, HIDE_SUCCESS_MESSAGE, REDIRECT_SUCCESS, SET_USERTYPE, AuthFetchActionTypes, ErrorInputType } from "./types"
import { transformErrors } from './utils/transformErrors'

export const authRequest = (): AuthFetchActionTypes => {
  return {type: AUTH_REQUEST}
}

export const loginSuccess = (data: string): AuthFetchActionTypes => {
  return {type: LOGIN_SUCCESS, payload: data}
}

export const authFailure = (errors: ErrorInputType): AuthFetchActionTypes => {
  const payload = transformErrors(errors)
  return {type: AUTH_FAILURE, payload}
}

export const createUserSuccess = (): AuthFetchActionTypes => {
  return {type: CREATE_USER_SUCCESS}
}

export const createUserRequest = (): AuthFetchActionTypes => {
  return { type: CREATE_USER_REQUEST }
}

export const hideSuccessMessage = (): AuthFetchActionTypes => {
  return {type: HIDE_SUCCESS_MESSAGE}
}

export const redirectSuccess = (): AuthFetchActionTypes => {
  return {type: REDIRECT_SUCCESS}
}

export const setUserType = (payload: string): AuthFetchActionTypes => {
  return {type: SET_USERTYPE, payload}
}

