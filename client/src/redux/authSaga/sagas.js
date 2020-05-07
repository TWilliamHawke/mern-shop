import { call, takeEvery, all, put } from 'redux-saga/effects'
import authService from '../../services/authService';
import { CREATE_USER, LOGIN_USER, CHECK_USERTYPE, LOGOUT } from './types';
import { authRequest, createUserSuccess, authFailure, loginSuccess, setUserType } from '../authReducer/actions';
import { logout } from './actions'
import storage from '../../services/storageServices'

export function* createUserRequest({payload}) {
  yield put(authRequest())
  try {
    yield call(authService.sendUserData, payload)
    
    yield put(createUserSuccess())

  } catch(e) {
    yield put(authFailure(e.response))
  }
}

export function* logoutSaga() {
  yield call(storage.removeItem, 'userData')
  yield put(setUserType('guest'))
}

export function* loginUserSaga({payload}) {
  yield put(authRequest())
  try {
    const {data} = yield call(authService.login, payload)
    yield call(storage.setItem, 'userData', data)
    yield put(loginSuccess(data.userType))

  } catch(e) {
    yield put(authFailure(e.response))
  }

}

export function* refreshTokenSaga(userType, refToken) {
  const {data} = yield call(authService.refresh, {userType, refToken})
  yield call(storage.setItem, 'userData', data)
  return data
}

export function* getTokenSaga() {
  try {
    const tokens = yield call(storage.getItem, 'userData')
    const {userType, tokens: {refToken, token, tokenDie}} = tokens
  
    if(tokenDie > Date.now()) return `Bearer ${token}`
  
    const userData = yield call(refreshTokenSaga, userType, refToken)
    return `Bearer ${userData.tokens.token}`  
  } catch(e) {
    yield put(logout())
  }
}


export function* checkUserTypeSaga() {
  try {  
    const tokens = yield call(storage.getItem, 'userData')
    const {userType, tokens: {refToken}} = tokens
    const data = yield call(refreshTokenSaga, userType, refToken)
    yield put(setUserType(data.userType))
  } catch(e) {
    yield put(logout())
  }
}

export default function* authSaga() {
  yield all([
    takeEvery(CREATE_USER, createUserRequest),
    takeEvery(LOGOUT, logoutSaga),
    takeEvery(LOGIN_USER, loginUserSaga),
    takeEvery(CHECK_USERTYPE, checkUserTypeSaga)
  ])
}