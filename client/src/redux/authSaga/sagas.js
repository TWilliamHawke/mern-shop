import { call, takeEvery, all, put } from 'redux-saga/effects'
import authService from '../../services/authService';
import { CREATE_USER, LOGIN_USER } from './types';
import { authRequest, createUserSuccess, authFailure, loginSuccess } from '../authReducer/actions';
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

export function* watchCreateUserRequest() {
  yield takeEvery(CREATE_USER, createUserRequest)
}
export function* watchLoginUserRequest() {
  yield takeEvery(LOGIN_USER, loginUserSaga)
}

export default function* rootSaga() {
  yield all([
    watchCreateUserRequest(),
    watchLoginUserRequest()
  ])
}