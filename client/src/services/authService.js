import axios from 'axios'


class AuthServise {
  sendUserData = async(userData) => {
    return axios.post('/api/auth/createUser', userData)
  }

  login = async(userData) => {
    return axios.post('/api/auth/loginUser', userData)
  }
}

const authServise = new AuthServise()

export default authServise