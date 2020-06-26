import { ADD_FIELD_SUCCESS, GET_FIELDS_SUCCESS, SAVE_TEMPLATE_SUCCESS, SAVE_TEMPLATE_REDIRRECT, LOAD_IMAGE_SUCCESS, LOAD_TEMPLATE_SUCCESS, CLEAR_TEMPLATE_DATA, ADD_ITEM_SUCCESS, FetchTemplateActionsType } from "./types"
import { FieldType, CategoryTemplateType } from "src/types/templateDataType"
import { ItemDataType } from "src/types/itemsDataType"

export type TemplateStore = {
  noContent: boolean
  fields: FieldType<string>[]
  saveSuccess: boolean
  imageUrl: string
  imageId: string | null
  saveItemSuccess: boolean
  category: CategoryTemplateType | null
  brands: string[]
  itemData: ItemDataType | null
}


export const initialState: TemplateStore = {
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

const templateReducer = (state = initialState, action: FetchTemplateActionsType): TemplateStore => {
  switch (action.type) {
    case ADD_FIELD_SUCCESS:
      return {
        ...state,
        noContent: true
      }
    case GET_FIELDS_SUCCESS:
      return {
        ...state,
        noContent: false,
        fields: action.payload.fields,
        brands: action.payload.brands
      }
    case SAVE_TEMPLATE_SUCCESS:
      return {
        ...state,
        saveSuccess: true
      }
    case SAVE_TEMPLATE_REDIRRECT:
      return {
        ...state,
        saveSuccess: false,
        noContent: true
      }
    case LOAD_IMAGE_SUCCESS: 
      return {
        ...state,
        imageId: action.payload.id,
        imageUrl: action.payload.img
      }
    case LOAD_TEMPLATE_SUCCESS:
      return {
        ...state,
        category: action.payload.category,
        itemData: action.payload.itemData,
        imageUrl: action.payload.itemData?.image || 'images/no-image.png'
      }
    case ADD_ITEM_SUCCESS: 
      return {
        ...state,
        saveItemSuccess: true
      }
    case CLEAR_TEMPLATE_DATA:
      return {
        ...state,
        noContent: true,
        saveSuccess: false,
        saveItemSuccess: false,
        imageUrl: 'images/no-image.png',
        imageId: null,
        category: null,
        itemData: null,
      }
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const x: never = action
  }
  return state
}


export default templateReducer