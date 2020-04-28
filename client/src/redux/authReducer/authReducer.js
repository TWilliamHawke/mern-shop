import { AUTH_REQUEST, CREATE_USER_SUCCESS, LOGIN_SUCCESS, AUTH_FAILURE, HIDE_SUCCESS_MESSAGE, REDIRECT_SUCCESS } from "./types"

const initialState = {
  loading: false,
  errors: [],
  userType: 'guest',
  successMessage: false,
  allowRedirect: false,
}

const handlers = {
  default: state => state,
  [AUTH_REQUEST]: state => ({
    ...state,
    loading: true,
    successMessage: false,
    errors: []
  }),
  [CREATE_USER_SUCCESS]: (state) => ({
    ...state,
    loading: false,
    successMessage: true,
    allowRedirect: true,
  }),
  [LOGIN_SUCCESS]: (state, payload) => ({
    ...state,
    ...payload,
    loading: false,
  }),
  [AUTH_FAILURE]: (state, payload) => ({
    ...state,
    errors: payload,
    loading: false
  }),
  [HIDE_SUCCESS_MESSAGE]: (state) => ({
    ...state,
    successMessage: false
  }),
  [REDIRECT_SUCCESS]: state => ({
    ...state,
    allowRedirect: false
  })
}

const authReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}


export default authReducer