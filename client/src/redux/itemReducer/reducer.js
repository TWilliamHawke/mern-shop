import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE, LOAD_IMAGE_SUCCESS, LOAD_TEMPLATE_SUCCESS } from "./types"

export const initialState = {
  loading: false,
  errors: [],
  imageUrl: 'images/no-image.png',
  imageId: null,
  category: null
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
  [LOAD_IMAGE_SUCCESS]: (state, payload) => ({
    ...state,
    loading: false,
    imageUrl: payload.img,
    imageId: payload.id
  }),
  [LOAD_TEMPLATE_SUCCESS]: (state, payload) => ({
    ...state,
    category: payload,
    loading: false
  })
}

const reducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}

export default reducer
