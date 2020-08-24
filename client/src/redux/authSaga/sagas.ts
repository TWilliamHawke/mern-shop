import { call, takeEvery, all, put } from 'redux-saga/effects'
import * as types from './types';
import { authRequest, createUserSuccess, authFailure, loginSuccess, setUserType } from '../authReducer/actions';
import { logout } from './actions'
import { storage } from 'src/utils/localStorage'
import { fetchCartSuccess } from '../ordersReducer/actions';
import { api } from 'src/api';
import { SagaIterator } from 'redux-saga';
import { refreshTokenSaga } from '../dataFetchSaga/getTokenSaga';

export function* createUserRequest({payload}: types.CreateUserTypeAction): Generator {
  yield put(authRequest())
  try {
    yield call(api.auth.sendUserData, payload)
    
    yield put(createUserSuccess())

  } catch(e) {
    yield put(authFailure(e.response))
  }
}

export function* logoutSaga(): Generator {
  yield call(storage.removeItem, 'userData')
  yield put(setUserType('guest'))
}

export function* loginUserSaga({payload}: types.LoginUserTypeAction): SagaIterator {
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

export function* checkUserTypeSaga(): SagaIterator {
  try {  
    const tokens = yield call(storage.getItem, 'userData')
    const { userType, tokens: {refToken} } = tokens
    const data = yield call(refreshTokenSaga, userType, refToken)
    yield put(setUserType(data.userType))
    yield put(fetchCartSuccess(data.cart))
  } catch(e) {
    yield put(logout())
  }
}

export default function* authSaga(): Generator {
  yield all([
    takeEvery(types.CREATE_USER, createUserRequest),
    takeEvery(types.LOGOUT, logoutSaga),
    takeEvery(types.LOGIN_USER, loginUserSaga),
    takeEvery(types.CHECK_USERTYPE, checkUserTypeSaga)
  ])
}