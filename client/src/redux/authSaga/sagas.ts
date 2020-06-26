import { call, takeEvery, all, put } from 'redux-saga/effects'
import authService from '../../services/authService';
import { CREATE_USER, LOGIN_USER, CHECK_USERTYPE, LOGOUT, CreateUserTypeAction, LoginUserTypeAction } from './types';
import { authRequest, createUserSuccess, authFailure, loginSuccess, setUserType } from '../authReducer/actions';
import { logout } from './actions'
import storage from 'src/services/storageServices'
import { fetchCartSuccess } from '../ordersReducer/actions';
import { api } from 'src/api';
import { SagaIterator } from 'redux-saga';
import { UsertypeType } from 'src/types/authDataTypes';

export function* createUserRequest({payload}: CreateUserTypeAction): Generator {
  yield put(authRequest())
  try {
    yield call(authService.sendUserData, payload)
    
    yield put(createUserSuccess())

  } catch(e) {
    yield put(authFailure(e.response))
  }
}

export function* logoutSaga(): Generator {
  yield call(storage.removeItem, 'userData')
  yield put(setUserType('guest'))
}

export function* loginUserSaga({payload}: LoginUserTypeAction): SagaIterator {
  yield put(authRequest())
  try {
    const { data } = yield call(api.auth.login, payload)
    yield call(storage.setItem, 'userData', data)
    yield put(loginSuccess(data.userType))
    yield put(fetchCartSuccess(data.cart))

  } catch(e) {
    yield put(authFailure(e.response))
  }

}

export function* refreshTokenSaga(userType: UsertypeType, refToken: string): SagaIterator {
  const {data} = yield call(authService.refresh, {userType, refToken})
  yield call(storage.setItem, 'userData', data)
  return data
}

export function* getTokenSaga(): SagaIterator {
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


export function* checkUserTypeSaga(): SagaIterator {
  try {  
    const tokens = yield call(storage.getItem, 'userData')
    const {userType, tokens: {refToken}} = tokens
    const data = yield call(refreshTokenSaga, userType, refToken)
    yield put(setUserType(data.userType))
    yield put(fetchCartSuccess(data.cart))
  } catch(e) {
    yield put(logout())
  }
}

export default function* authSaga(): Generator {
  yield all([
    takeEvery(CREATE_USER, createUserRequest),
    takeEvery(LOGOUT, logoutSaga),
    takeEvery(LOGIN_USER, loginUserSaga),
    takeEvery(CHECK_USERTYPE, checkUserTypeSaga)
  ])
}