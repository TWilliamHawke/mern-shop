import * as types from "./types"
import { CategoryDataType, ItemDataType, FiltersType } from "src/types/itemsDataType"

export type ItemState = {
  categoryData: CategoryDataType | null
  itemData: ItemDataType | null
  filters: FiltersType | null
}

export const initialState: ItemState = {
  categoryData: null,
  itemData: null,
  filters: null
}

const reducer = (state = initialState, action: types.FetchItemsActionsType): ItemState => {
  switch (action.type) {
    case types.LOAD_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryData: action.payload
      }
    case types.FETCH_FILTERS_SUCCESS:
      return {
        ...state,
        filters: action.payload.filters,
        categoryData: action.payload.categoryData,
      }
    case types.LOAD_ITEM_SUCCESS:
      return {
        ...state,
        itemData: action.payload
      }
    case types.CLEAR_FILTERS:
      return {
        ...state,
        categoryData: null,
        filters: null
      }
    case types.CLEAR_ITEMDATA:
      return {
        ...state,
        itemData: null
      }
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const x:never = action
  }
  return state
}

export default reducer
