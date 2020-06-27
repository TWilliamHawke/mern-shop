import { useEffect } from "react"
import { checkUserType } from 'src/redux/authSaga/actions'
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "src/redux/store"
import { AuthState } from "src/redux/authReducer/authReducer"
import { UsertypeType } from "src/types/authDataTypes"


export const useUserTypeChecker = (): UsertypeType => {
  const dispatch = useDispatch()
  const { userType } = useSelector<AppState, AuthState>(store => store.auth)


  useEffect(() => {
    dispatch(checkUserType())
  }, [dispatch])

  return userType
}
