import { AUTH_REQUEST, LOGIN_SUCCESS, AUTH_FAILURE, CREATE_USER_SUCCESS, CREATE_USER_REQUEST, CREATE_USER, LOGIN_USER, HIDE_SUCCESS_MESSAGE, REDIRECT_SUCCESS } from "../reducers/authReducer/types"
import { transformErrors } from '../utils/actionHelpers'

export const authRequest = () => {
  return {type: AUTH_REQUEST}
}

export const loginSuccess = (data) => {
  return {type: LOGIN_SUCCESS, payload: data}
}

export const authFailure = errors => {
  const payload = transformErrors(errors)
  return {type: AUTH_FAILURE, payload}
}

export const createUserSuccess = () => {
  return {type: CREATE_USER_SUCCESS}
}

export const createUserRequest = () => {
  return { type: CREATE_USER_REQUEST }
}

export const createUser = (payload) => {
  return {type: CREATE_USER, payload}
}

export const loginUser = () => {
  return {type: LOGIN_USER}
}

export const hideSuccessMessage = () => {
  return {type: HIDE_SUCCESS_MESSAGE}
}

export const redirectSuccess = () => {
  return {type: REDIRECT_SUCCESS}
}
