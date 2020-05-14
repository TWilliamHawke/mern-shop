import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, CLEAR_GLOBAL_ERRORS } from "./types"


export const initialState = {
  loading: false,
  errors: [],
  categories: {
    cpu: 'CPU',
    motherboards: 'Motherboards',
    graphic: 'Graphic Cards',
    coolings: 'CPU Cooling',
    memory: 'Memory',
    storage: 'Storage',
    cases: 'Cases',
    fans: 'Case Fans',
    power: 'Power Supplies',
  }
}

const handlers = {
  default: state => state,
  [FETCH_DATA_REQUEST]: state => ({
    ...state,
    loading: true,
    errors: []
  }),
  [FETCH_DATA_SUCCESS]: state => ({
    ...state,
    loading: false
  }),
  [FETCH_DATA_FAILURE]: (state, payload) => ({
    ...state,
    loading: false,
    errors: payload,
  }),
  [CLEAR_GLOBAL_ERRORS]: state => ({
    ...state,
    errors: []
  })
}

const globalReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}

export default globalReducer