import * as types from "./types"
import { ErrorOutputType, UsertypeType } from "src/types/authDataTypes"

export type AuthState = {
  loading: boolean
  errors: ErrorOutputType
  userType: UsertypeType
  successMessage: boolean
  allowRedirect: boolean
}

export const initialState: AuthState = {
  loading: false,
  errors: [],
  userType: null,
  successMessage: false,
  allowRedirect: false,
}

const authReducer = (state = initialState, action: types.AuthFetchActionTypes): AuthState => {

  switch (action?.type) {
    case types.AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        successMessage: false,
        errors: []
      }
    case types.CREATE_USER_REQUEST: 
      return state
    case types.AUTH_FAILURE: 
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case types.LOGIN_SUCCESS: 
      return {
        ...state,
        userType: action.payload,
        loading: false,
      }
    case types.HIDE_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: false
      }
    case types.REDIRECT_SUCCESS:
      return {
        ...state,
        allowRedirect: false
      }
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: true,
        allowRedirect: true,
      }
    case types.SET_USERTYPE:
      return {
        ...state,
        userType: action.payload
      }
  
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const x: never = action
  }

  return state
}


export default authReducer