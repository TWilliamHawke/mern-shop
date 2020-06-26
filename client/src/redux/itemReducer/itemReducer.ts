import { LOAD_CATEGORY_SUCCESS, LOAD_ITEM_SUCCESS, FETCH_FILTERS_SUCCESS, CLEAR_FILTERS, CLEAR_ITEMDATA, FetchItemsActionsType, } from "./types"
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

const reducer = (state = initialState, action: FetchItemsActionsType): ItemState => {
  switch (action.type) {
    case LOAD_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryData: action.payload
      }
    case FETCH_FILTERS_SUCCESS:
      return {
        ...state,
        filters: action.payload.filters,
        categoryData: action.payload.categoryData,
      }
    case LOAD_ITEM_SUCCESS:
      return {
        ...state,
        itemData: action.payload
      }
    case CLEAR_FILTERS:
      return {
        ...state,
        categoryData: null,
        filters: null
      }
    case CLEAR_ITEMDATA:
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
