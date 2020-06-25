import { CREATE_USER, LOGIN_USER, CHECK_USERTYPE, LOGOUT, CreateUserTypeAction, LoginUserTypeAction, CheckUsertypeAction, LogoutAction } from "./types"
import { UserDataType } from "src/types/authDataTypes"


export const createUser = (payload: UserDataType): CreateUserTypeAction => {
  return {type: CREATE_USER, payload}
}

export const loginUser = (payload: UserDataType): LoginUserTypeAction => {
  return {type: LOGIN_USER, payload}
}

export const checkUserType = (): CheckUsertypeAction => {
  return { type: CHECK_USERTYPE }
}

export const logout = (): LogoutAction => {
  return { type: LOGOUT }
}

