const authValidator = ({loading, phone, path, password, email, userName}) => {
  if(loading) return true
  if(password.length < 6) return true
  if(userName.length < 2 && path === '/signin') return true 
  if(!phone.replace(/\D/g, '').match(/7\d{10}/)) return true
  if(!email.match(/.+@.+\..+/)) return true
  return false
}

export default authValidator