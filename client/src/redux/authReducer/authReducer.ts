import { AUTH_REQUEST, CREATE_USER_SUCCESS, LOGIN_SUCCESS, AUTH_FAILURE, HIDE_SUCCESS_MESSAGE, REDIRECT_SUCCESS, SET_USERTYPE, AuthFetchActionTypes, CREATE_USER_REQUEST } from "./types"
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

const authReducer = (state = initialState, action: AuthFetchActionTypes): AuthState => {

  switch (action?.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        successMessage: false,
        errors: []
      }
    case CREATE_USER_REQUEST: 
      return state
    case AUTH_FAILURE: 
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case LOGIN_SUCCESS: 
      return {
        ...state,
        userType: action.payload,
        loading: false,
      }
    case HIDE_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: false
      }
    case REDIRECT_SUCCESS:
      return {
        ...state,
        allowRedirect: false
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: true,
        allowRedirect: true,
      }
    case SET_USERTYPE:
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