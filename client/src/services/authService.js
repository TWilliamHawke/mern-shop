import axios from 'axios'

const getAuthService = () => {
  const sendUserData = async (userInfo) => {
    try {
      const {data} = await axios.post('/api/auth/createUser', {userInfo})
      console.log(data)
      return data
    } catch(e) {
      return e
    }
  }


  return {sendUserData}
}

export default getAuthService