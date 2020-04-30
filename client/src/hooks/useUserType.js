const useUserType = (userType) => {
  const isGuest = userType === 'guest' ? true : false
  const isUser = userType === 'user' ? true : false
  const isAdmin = userType === 'admin' ? true : false
  const isAuthorise = isUser || isAdmin


  return {isGuest, isUser, isAdmin, isAuthorise}
}

export default useUserType