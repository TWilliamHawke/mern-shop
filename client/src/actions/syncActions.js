import { AUTH_REQUEST, LOGIN_SUCCESS, AUTH_FAILURE, CREATE_USER_SUCCESS, CREATE_USER_REQUEST, CREATE_USER } from "../reducers/authReducer/types"

export const authRequest = () => {
  return {type: AUTH_REQUEST}
}

export const loginSuccess = (data) => {
  return {type: LOGIN_SUCCESS, payload: data}
}

export const authFailure = error => {
  return {type: AUTH_FAILURE, payload: error}
}

export const createUserSuccess = () => {
  return {type: CREATE_USER_SUCCESS}
}

export const createUserRequest = () => {
  return { type: CREATE_USER_REQUEST }
}

export const createUser = () => {
  return {type: CREATE_USER}
}