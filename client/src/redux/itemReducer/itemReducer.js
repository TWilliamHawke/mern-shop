import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE, LOAD_CATEGORY_SUCCESS, } from "./types"

export const initialState = {
  loading: false,
  errors: [],
  categoryData: null
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
  [LOAD_CATEGORY_SUCCESS]: (state, payload) => ({
    ...state,
    categoryData: payload
  })
}

const reducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}

export default reducer
