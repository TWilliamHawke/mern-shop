import { LOAD_CATEGORY_SUCCESS, LOAD_ITEM_SUCCESS, FETCH_FILTERS_SUCCESS, CLEAR_FILTERS, CLEAR_ITEMDATA, } from "./types"

export const initialState = {
  loading: false,
  errors: [],
  categoryData: null,
  itemData: null,
  filters: null
}

const handlers = {
  default: state => state,
  [LOAD_CATEGORY_SUCCESS]: (state, payload) => ({
    ...state,
    categoryData: payload
  }),
  [LOAD_ITEM_SUCCESS]: (state, payload) => ({
    ...state,
    itemData: payload
  }),
  [FETCH_FILTERS_SUCCESS]: (state, {filters, categoryData}) => ({
    ...state,
    filters,
    categoryData,
  }),
  [CLEAR_FILTERS]: (state) => ({
    ...state,
    categoryData: null,
    filters: null
  }),
  [CLEAR_ITEMDATA]: state => ({
    ...state,
    itemData: null
  })
}

const reducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}

export default reducer
