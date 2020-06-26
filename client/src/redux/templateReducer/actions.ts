import { ADD_FIELD_SUCCESS, GET_FIELDS_SUCCESS, SAVE_TEMPLATE_SUCCESS, SAVE_TEMPLATE_REDIRRECT, LOAD_TEMPLATE_SUCCESS, LOAD_IMAGE_SUCCESS, CLEAR_TEMPLATE_DATA, ADD_ITEM_SUCCESS, AddFieldSuccessAction, GetFielsSuccessAction, SaveTemplateSuccessAction, SaveTemplateRedirrectAction, LoadImageSuccessAction, LoadTemplateSuccessAction, ClearTemplateDataAction, AddItemSuccessAction } from "./types"
import { FetchFieldsType, FetchImageData, FetchTemplateType } from "src/types/templateDataType"


export const addFieldSuccess = (): AddFieldSuccessAction => ({
  type: ADD_FIELD_SUCCESS
})

export const getFieldsSuccess = (payload: FetchFieldsType): GetFielsSuccessAction => ({
  type: GET_FIELDS_SUCCESS, payload
})

export const saveTemplateSuccess = (): SaveTemplateSuccessAction => ({
  type: SAVE_TEMPLATE_SUCCESS
})

export const saveTemplateRedirrect = (): SaveTemplateRedirrectAction => ({
  type: SAVE_TEMPLATE_REDIRRECT
})

export const loadImageSuccess = (payload: FetchImageData): LoadImageSuccessAction => ({
  type: LOAD_IMAGE_SUCCESS, payload
})

export const loadTemplateSuccess = (payload: FetchTemplateType): LoadTemplateSuccessAction => ({
  type: LOAD_TEMPLATE_SUCCESS, payload
})

export const clearTemplateData = (): ClearTemplateDataAction => ({
  type: CLEAR_TEMPLATE_DATA
})

export const addItemSuccess = (): AddItemSuccessAction => ({
  type: ADD_ITEM_SUCCESS
})