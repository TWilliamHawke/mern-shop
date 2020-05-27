import { ADD_FIELD_SUCCESS, GET_FIELDS_SUCCESS, SAVE_TEMPLATE_SUCCESS, SAVE_TEMPLATE_REDIRRECT, LOAD_IMAGE_SUCCESS, LOAD_TEMPLATE_SUCCESS, CLEAR_TEMPLATE_DATA, ADD_ITEM_SUCCESS } from "./types"


export const initialState = {
  noContent: true,
  fields: [],
  saveSuccess: false,
  imageUrl: 'images/no-image.png',
  imageId: null,
  saveItemSuccess: false,
  category: null,
  brands: [],
  itemData: null
}

const handlers = {
  default: state => state,
  [ADD_FIELD_SUCCESS]: state => ({
    ...state,
    noContent: true
  }),
  [GET_FIELDS_SUCCESS]: (state, {fields, brands}) => ({
    ...state,
    noContent: false,
    fields,
    brands
  }),
  [SAVE_TEMPLATE_SUCCESS]: state => ({
    ...state,
    saveSuccess: true
  }),
  [SAVE_TEMPLATE_REDIRRECT]: state => ({
    ...state,
    saveSuccess: false,
    noContent: true
  }),
  [LOAD_IMAGE_SUCCESS]: (state, {id, img}) => ({
    ...state,
    imageId: id,
    imageUrl: img
  }),
  [LOAD_TEMPLATE_SUCCESS]: (state, {category, itemData}) => ({
    ...state,
    category,
    itemData,
    imageUrl: itemData?.image || 'images/no-image.png'
  }),
  [ADD_ITEM_SUCCESS]: (state) => ({
    ...state,
    saveItemSuccess: true
  }),
  [CLEAR_TEMPLATE_DATA]: state => ({
    ...state,
    noContent: true,
    saveSuccess: false,
    saveItemSuccess: false,
    imageUrl: 'images/no-image.png',
    imageId: null,
    category: null,
    itemData: null,
  })
}

const templateReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}

export default templateReducer