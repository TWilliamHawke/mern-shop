import { TEMPLATE_REQUEST, TEMPLATE_FAILURE, ADD_FIELD_SUCCESS, GET_FIELDS_SUCCESS, LOAD_CONTENT } from "./types"


export const initialState = {
  noContent: true,
  loading: true,
  errors: [],
  fields: [],
  
}

const handlers = {
  default: state => state,
  [LOAD_CONTENT]: state => ({
    ...state,
  }),
  [TEMPLATE_REQUEST]: state => ({
    ...state,
    loading: true,
    errors: []
  }),
  [TEMPLATE_FAILURE]: (state, payload) => ({
    ...state,
    loading: false,
    errors: payload
  }),
  [ADD_FIELD_SUCCESS]: state => ({
    ...state,
    loading: false
  }),
  [GET_FIELDS_SUCCESS]: (state, payload) => ({
    ...state,
    noContent: false,
    fields: payload
  }),
}

const templateReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}

export default templateReducer