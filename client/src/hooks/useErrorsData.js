import { useSelector, useDispatch } from "react-redux"
import { clearGlobalErrors } from 'src/redux/globalReducer/actions'

export const useErrorsData = () => {
  const { errors } = useSelector(store => store.global) || []
  const dispatch = useDispatch()

  return {
    errors,
    clearErrors: () => dispatch(clearGlobalErrors())
  }
}