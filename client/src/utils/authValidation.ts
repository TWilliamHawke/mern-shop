type vals = {
  loading: boolean
  phone: string
  path: string
  password: string
  email: string
  userName: string
}

export const authValidator = ({loading, phone, path, password, email, userName}: vals): boolean => {
  if(loading) return true
  if(password.length < 6) return true
  if(userName.length < 2 && path === '/signin') return true 
  if(!phone.replace(/\D/g, '').match(/7\d{10}/)) return true
  if(!email.match(/[-.\w]+@([\w-]+\.)+[\w-]+/)) return true
  return false
}

export default authValidator