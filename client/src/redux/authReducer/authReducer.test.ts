import authReducer, {initialState as reducerState} from './authReducer';
import { authRequest, createUserSuccess, loginSuccess } from './actions';
import { AUTH_FAILURE, HIDE_SUCCESS_MESSAGE, REDIRECT_SUCCESS, SET_USERTYPE, CREATE_USER_REQUEST } from './types';

describe('test with random action', () => {
  it('should return initial state', () => {
    expect(authReducer(reducerState, {type: CREATE_USER_REQUEST})).toEqual(reducerState)
  })
})

describe('test auth_loading action', () => {
  it('should clear message and start loading', () => {
    const initialState = {
      ...reducerState,
      loading: false,
      errors: 'errorArray',
      successMessage: true
    }
    expect(authReducer(initialState, authRequest())).toEqual({
      ...reducerState,
      errors: [],
      loading: true,
      successMessage: false
    })
  })
})

describe('CREATE_USER_SUCCESS test', () => {
  it('should stop loading, show message and allow redirect', () => {
    const initialState = {
      ...reducerState,
      loading: true,
      successMessage: false,
      allowRedirect: false
    }
    expect(authReducer(initialState, createUserSuccess())).toEqual({
      ...reducerState,
      loading: false,
      successMessage: true,
      allowRedirect: true
    })
  })
})

describe('loginSuccess test', () => {
  it('should stop loading and set userType', () => {
    const initialState = {
      ...reducerState,
      loading: true,
      userType: 'guest'
    }
    expect(authReducer(initialState, loginSuccess('usertype'))).toEqual({
      ...reducerState,
      loading: false,
      userType: 'usertype'
    })
  })
})

describe('authFailure test', () => {
  it('should stop loading and set errors array', () => {
    const initialState = {
      ...reducerState,
      loading: true,
      errors: []
    }
    expect(authReducer(initialState, {type: AUTH_FAILURE, payload: 'errorArray'})).toEqual({
      ...reducerState,
      loading: false,
      errors: 'errorArray'
    })
  })
})

describe('HIDE_SUCCESS_MESSAGE test', () => {
  it('should hide success message', () => {
    const initialState = {
      ...reducerState,
      successMessage: true
    }
    expect(authReducer(initialState, {type: HIDE_SUCCESS_MESSAGE})).toEqual({
      ...reducerState,
      successMessage: false
    })
  })
})

describe('REDIRECT_SUCCESS test', () => {
  it('should disable redirect', () => {
    const initialState = {
      ...reducerState,
      allowRedirect: true
    }
    expect(authReducer(initialState, {type: REDIRECT_SUCCESS})).toEqual({
      ...reducerState,
      allowRedirect: false
    })
  })
})

describe('SET_USERTYPE test', () => {
  it('should set user type', () => {
    const initialState = {
      ...reducerState,
      userType: ''
    }
    expect(authReducer(initialState, {type: SET_USERTYPE, payload: 'testType'})).toEqual({
      ...reducerState,
      userType: 'testType'
    })
  })
})

