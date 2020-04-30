import { call, takeEvery, all, put } from 'redux-saga/effects'
import authService from '../../services/authService';
import { CREATE_USER, LOGIN_USER, CHECK_USERTYPE, LOGOUT } from './types';
import { authRequest, createUserSuccess, authFailure, loginSuccess, setUserType } from '../authReducer/actions';
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
    yield storage.setItem('userData', data)
    yield put(loginSuccess(data.userType))

  } catch(e) {
    yield put(authFailure(e.response))
  }

}


export function* checkUserTypeSaga() {
  try {
    const {userType, tokens: {refToken}} = yield storage.getItem('userData')
    const {data} = yield call(authService.refresh, {userType, refToken})
    yield call(storage.setItem, 'userData', data)
    yield put(setUserType(data.userType))
  } catch(e) {
    yield call(storage.removeItem, 'userData')
    yield logoutSaga()
  }
}

export function* watchCreateUserRequest() {
  yield takeEvery(CREATE_USER, createUserRequest)
}
export function* watchLogoutSaga() {
  yield takeEvery(LOGOUT, logoutSaga)
}
export function* watchLoginUserRequest() {
  yield takeEvery(LOGIN_USER, loginUserSaga)
}
export function* watchcheckUserTypeSaga() {
  yield takeEvery(CHECK_USERTYPE, checkUserTypeSaga)
}

export default function* rootSaga() {
  yield all([
    watchCreateUserRequest(),
    watchLoginUserRequest(),
    watchcheckUserTypeSaga(),
    watchLogoutSaga()
  ])
}