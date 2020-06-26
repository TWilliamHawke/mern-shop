import axios from 'axios'
import { UserDataType, UsertypeType, TokenDataType } from 'src/types/authDataTypes'

type TokenData = {userType: UsertypeType, refToken: string}

export const authServise = {
  sendUserData: async(userData: UserDataType): Promise<void> => {
    return axios.post('/api/auth/createUser', userData)
  },

  login: async(userData: UserDataType): Promise<{data: TokenDataType}> => {
    return axios.post('/api/auth/loginUser', userData)
  },

  refresh: async(tokenData: TokenData): Promise<{data: TokenDataType}> => {
    return axios.post('/api/auth/refresh', tokenData)
  }
}
