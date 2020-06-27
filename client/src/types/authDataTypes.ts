export type UsertypeType = 'admin' | 'user' | 'guest' | null

export type ErrorInputType = {
  data: {
    errors?: {msg: string}[]
    message?: string
  }
}

export type ErrorOutputType = string[]

export type UserDataType = {
  phone: string,
  email: string,
  userName: string,
  password: string
  isEmail: boolean
}

export type TokenDataType = {
  tokens: {
    token: string,
    refToken: string,
    expiresIn: Date
  }
  userType: UsertypeType
}
