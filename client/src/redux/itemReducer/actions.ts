import { LOAD_CATEGORY_SUCCESS, LOAD_ITEM_SUCCESS, FETCH_FILTERS_SUCCESS, CLEAR_FILTERS, CLEAR_ITEMDATA, LoadCategorySuccessAction, LoadItemSuccessAction, FetchFiltersSuccessAction, ClearFiltersAction, ClearItemdataAction } from "./types"
import { CategoryDataType, ItemDataType, FetchFiltersType } from "src/types/itemsDataType"

export const loadCategorySuccess = (payload: CategoryDataType): LoadCategorySuccessAction => ({
  type: LOAD_CATEGORY_SUCCESS, payload
})

export const loadItemSuccess = (payload: ItemDataType): LoadItemSuccessAction => ({
  type: LOAD_ITEM_SUCCESS, payload
})

export const fetchFiltersSuccess = (payload: FetchFiltersType): FetchFiltersSuccessAction => ({
  type: FETCH_FILTERS_SUCCESS, payload
})

export const clearFilters = (): ClearFiltersAction => ({
  type: CLEAR_FILTERS
})

export const clearItemData = (): ClearItemdataAction => ({
  type: CLEAR_ITEMDATA
})