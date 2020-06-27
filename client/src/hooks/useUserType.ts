import { useSelector } from 'react-redux'
import { AppState } from 'src/redux/store'
import { AuthState } from 'src/redux/authReducer/authReducer'

type UseUserTypeType = {
  isGuest: boolean
  isAdmin: boolean
  isUser: boolean
  isAuthorise: boolean
}

const useUserType = (): UseUserTypeType => {
  const { userType } = useSelector<AppState, AuthState>(store => store.auth)

  const isGuest = userType === 'guest' ? true : false
  const isUser = userType === 'user' ? true : false
  const isAdmin = userType === 'admin' ? true : false
  const isAuthorise = isUser || isAdmin

  return { isGuest, isUser, isAdmin, isAuthorise }
}

export default useUserType