import { useSelector, useDispatch } from "react-redux"
import { clearGlobalErrors } from 'src/redux/globalReducer/actions'
import { AppState } from "src/redux/store"
import { GlobalStore } from "src/redux/globalReducer/globalReducer"
import { ErrorOutputType } from "src/types/authDataTypes"
import { ClearGlobalErrorsAction } from "src/redux/globalReducer/types"

type UseErrorsDataType = {
  errors: ErrorOutputType
  clearErrors: () => ClearGlobalErrorsAction
}

export const useErrorsData = (): UseErrorsDataType => {
  const { errors } = useSelector<AppState, GlobalStore>(store => store.global) || []
  const dispatch = useDispatch()

  return {
    errors,
    clearErrors: () => dispatch(clearGlobalErrors())
  }
}