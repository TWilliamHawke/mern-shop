import { LoadImageAction, LOAD_IMAGE, SaveTemplateAction, SAVE_TEMPLATE, LoadTemplateAction, LOAD_TEMPLATE, EditFieldAction, EDIT_FIELD, AddFieldAction, ADD_FIELD, GetFieldsAction, GET_FIELDS, AddItemAction, ADD_ITEM, EditItemAction, EDIT_ITEM } from "./types"
import { SaveTemplateData, EditFieldData } from "src/types/fetchDataTypes"
import { TfItemDataInput } from "src/types/actionHelpersTypes"
import { tfItemData } from "src/utils/actionHelpers"

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

export const editItem = (data: TfItemDataInput): EditItemAction => {
  const payload = tfItemData(data)
  return {
    type: EDIT_ITEM, payload
  }
}
