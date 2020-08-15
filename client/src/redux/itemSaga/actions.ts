import { TfFilterToStringInput } from "src/types/actionHelpersTypes"
import { tfFilterToString } from "src/utils/actionHelpers"
import { GetCategoryAction, GET_CATEGORY, GetItemAction, GET_ITEM, GetFiltersAction, AddPopularAction, RemovePopularAction, GetPopularAction, ADD_POPULAR, GET_FILTERS, REMOVE_POPULAR, GET_POPULAR } from "./types"

export const getCategory = (data: TfFilterToStringInput): GetCategoryAction => {
  const payload = tfFilterToString(data)
  return {
    type: GET_CATEGORY, payload
  }
}

export const getItem = (payload: string): GetItemAction => ({
  type: GET_ITEM, payload
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