


const initialState = {
  loading: false,
  errors: [],
  userType: 'guest',
  isGuest: true,
}

const handlers = {
  default: state => state
}

const authReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action.payload)
}


export default authReducer