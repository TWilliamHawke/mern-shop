import { CREATE_USER, LOGIN_USER } from "./types"


export const createUser = (payload) => {
  return {type: CREATE_USER, payload}
}

export const loginUser = (payload) => {
  return {type: LOGIN_USER, payload}
}

