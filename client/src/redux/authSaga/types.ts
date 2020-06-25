import { UserDataType } from 'src/types/authDataTypes'

export const CREATE_USER = 'CREATE_USER'
export type CreateUserTypeAction = {
  type: typeof CREATE_USER
  payload: UserDataType
}

export const LOGIN_USER = 'LOGIN_USER'
export type LoginUserTypeAction = {
  type: typeof LOGIN_USER,
  payload: UserDataType
}

export const CHECK_USERTYPE = 'CHECK_USERTYPE'
export type CheckUsertypeAction = {
  type: typeof CHECK_USERTYPE
}

export const LOGOUT = 'LOGOUT'
export type LogoutAction = {
  type: typeof LOGOUT
}