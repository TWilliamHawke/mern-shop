const useUserType = (userType) => {
  const isGuest = userType === 'guest' ? true : false
  const isUser = userType === 'user' ? true : false
  const isAdmin = userType === 'admin' ? true : false

  return {isGuest, isUser, isAdmin}
}

export default useUserType