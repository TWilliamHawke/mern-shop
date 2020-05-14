import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE, } from "./types"

export const initialState = {
  loading: false,
  errors: [],
}

const handlers = {
  default: state => state,
  [FETCH_ITEM_REQUEST]: state => ({
    ...state,
    loading: true,
    errors: []
  }),
  [FETCH_ITEM_FAILURE]: (state, payload) => ({
    ...state,
    loading: false,
    errors: payload
  }),
}

const reducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}

export default reducer
