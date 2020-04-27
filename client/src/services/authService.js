import axios from 'axios'

const getAuthService = () => {
  const sendUserData = async (userData) => {
    // try {
    //   const {data} = await axios.post('/api/auth/createUser', userData)
    //   return data
    // } catch(e) {
    //   // console.log(e.response.data)
    //   // throw new Error(e.response.data)
    //   return e.response.data
    // }

    return axios.post('/api/auth/createUser', userData)
  }


  return {sendUserData}
}

export default getAuthService