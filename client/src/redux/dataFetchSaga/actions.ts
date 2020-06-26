import { LOAD_IMAGE, SAVE_TEMPLATE, LOAD_TEMPLATE, EDIT_FIELD, GET_FIELDS, ADD_FIELD, ADD_ITEM, GET_CATEGORY, GET_ITEM, EDIT_ITEM, ADD_TO_CART, GET_CART, REMOVE_ONE, REMOVE_ALL, MAKE_ORDER, GET_ALL_ORDERS, GET_MY_ORDERS, CANCEL_ORDER, GET_FILTERS, ADD_POPULAR, REMOVE_POPULAR, GET_POPULAR, LoadImageAction, SaveTemplateAction, LoadTemplateAction, EditFieldAction, AddFieldAction, GetFieldsAction, AddItemAction, GetCategoryAction, GetItemAction, EditItemAction, AddToCartAction, GetCartAction, RemoveOneAction, RemoveAllAction, MakeOrderAction, GetMyOrdersAction, GetAllOrdersAction, CancelOrderAction, GetFiltersAction, AddPopularAction, RemovePopularAction, GetPopularAction } from "./types";
import { tfItemData, tfFilterToString } from "../../utils/actionHelpers";
import { SaveTemplateData, EditFieldData } from "src/types/fetchDataTypes";
import { TfItemDataInput, TfFilterToStringInput } from "src/types/actionHelpersTypes";


export const loadImage = (payload: FormData): LoadImageAction => ({
  type: LOAD_IMAGE, payload
})

export const saveTemplate = (payload: SaveTemplateData): SaveTemplateAction => ({
  type: SAVE_TEMPLATE, payload
})

export const loadTemplate = (payload: {cat: string, item: string}): LoadTemplateAction => ({
  type: LOAD_TEMPLATE, payload
})

export const editField = (payload: EditFieldData): EditFieldAction => ({
  type: EDIT_FIELD, payload
})

export const addField = (payload: EditFieldData): AddFieldAction => ({
  type: ADD_FIELD, payload
})

export const getFields = (payload: string): GetFieldsAction => ({
  type: GET_FIELDS, payload
})

export const addItem = (data: TfItemDataInput): AddItemAction => {
  const payload = tfItemData(data)
  return {
    type: ADD_ITEM, payload
  }
}

export const getCategory = (data: TfFilterToStringInput): GetCategoryAction => {
  const payload = tfFilterToString(data)
  return {
    type: GET_CATEGORY, payload
  }
}

export const getItem = (payload: string): GetItemAction => ({
  type: GET_ITEM, payload
})

export const editItem = (data: TfItemDataInput): EditItemAction => {
  const payload = tfItemData(data)
  return {
    type: EDIT_ITEM, payload
  }
}

export const addToCart = (payload: string): AddToCartAction => ({
  type: ADD_TO_CART, payload
})

export const getCart = (): GetCartAction => ({
  type: GET_CART
})

export const removeOne = (payload: string): RemoveOneAction => ({
  type: REMOVE_ONE, payload
})

export const removeAll = (payload: string): RemoveAllAction => ({
  type: REMOVE_ALL, payload
})

export const makeOrder = (payload: number): MakeOrderAction => ({
  type: MAKE_ORDER, payload
})

export const getMyOrders = (): GetMyOrdersAction => ({
  type: GET_MY_ORDERS
})

export const getAllOrders = (): GetAllOrdersAction => ({
  type: GET_ALL_ORDERS
})

export const cancelOrder = (payload: string): CancelOrderAction => ({
  type: CANCEL_ORDER, payload
})

export const getFilters = (payload: string): GetFiltersAction => ({
  type: GET_FILTERS, payload
})

export const addPopular = (payload: string): AddPopularAction => ({
  type: ADD_POPULAR, payload
})

export const removePoupular = (payload: string) : RemovePopularAction=> ({
  type: REMOVE_POPULAR, payload
})

export const getPopular = (): GetPopularAction => ({
  type: GET_POPULAR
})