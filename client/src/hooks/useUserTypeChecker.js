import { useEffect } from "react"
import { checkUserType } from 'src/redux/authSaga/actions'
import { useDispatch, useSelector } from "react-redux"


export const useUserTypeChecker = () => {
  const dispatch = useDispatch()
  const { userType } = useSelector(store => store.auth)


  useEffect(() => {
    dispatch(checkUserType())
  }, [dispatch])

  return userType
}
