import { AUTH_REQUEST, CREATE_USER_SUCCESS, LOGIN_SUCCESS, AUTH_FAILURE } from "./types"



const initialState = {
  loading: false,
  errors: [],
  userType: 'guest',
  isGuest: true,
}

const handlers = {
  default: state => state,
  [AUTH_REQUEST]: state => ({
    ...state,
    loading: true,
    errors: []
  }),
  [CREATE_USER_SUCCESS]: (state) => ({
    ...state,
    loading: false,
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
  })
}

const authReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}


export default authReducer