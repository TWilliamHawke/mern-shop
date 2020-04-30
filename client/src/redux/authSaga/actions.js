import { CREATE_USER, LOGIN_USER, CHECK_USERTYPE, LOGOUT } from "./types"


export const createUser = (payload) => {
  return {type: CREATE_USER, payload}
}

export const loginUser = (payload) => {
  return {type: LOGIN_USER, payload}
}

export const checkUserType = () => {
  return { type: CHECK_USERTYPE }
}

export const logout = () => {
  return { type: LOGOUT }
}

