import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, CLEAR_GLOBAL_ERRORS, FETCH_POPULAR_SUCCESS, GlobalDataActionsType } from "./types"
import { ErrorOutputType } from "src/types/authDataTypes"
import { CategoryDataType } from "src/types/itemsDataType"

const categories = {
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

type GlobalStore = {
  loading: boolean
  errors: ErrorOutputType
  categories: typeof categories
  popular: CategoryDataType
}

export const initialState: GlobalStore = {
  loading: false,
  errors: [],
  categories,
  popular: []
}

const globalReducer = (state = initialState, action: GlobalDataActionsType): GlobalStore => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        errors: []
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      }
    case CLEAR_GLOBAL_ERRORS:
      return {
        ...state,
        errors: []
      }
    case FETCH_POPULAR_SUCCESS:
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