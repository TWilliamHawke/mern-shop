import * as types from "./types"
import { ErrorOutputType } from "src/types/authDataTypes"
import { CategoryDataType } from "src/types/itemsDataType"

export const categories = {
  cpu: 'CPU',
  motherboards: 'Motherboards',
  graphic: 'Graphic Cards',
  // coolings: 'CPU Cooling',
  memory: 'Memory',
  storage: 'Storage',
  cases: 'Cases',
  // fans: 'Case Fans',
  power: 'Power Supplies',
}

export type CategoriesType = typeof categories

export type GlobalStore = {
  loading: boolean
  errors: ErrorOutputType
  categories: CategoriesType
  popular: CategoryDataType
}

export const initialState: GlobalStore = {
  loading: false,
  errors: [],
  categories,
  popular: []
}

const globalReducer = (state = initialState, action: types.GlobalDataActionsType): GlobalStore => {
  switch (action.type) {
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        errors: []
      }
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      }
    case types.CLEAR_GLOBAL_ERRORS:
      return {
        ...state,
        errors: []
      }
    case types.FETCH_POPULAR_SUCCESS:
      return {
        ...state,
        popular: action.payload
      }
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const x: never = action
  }
  return state
}

export default globalReducer