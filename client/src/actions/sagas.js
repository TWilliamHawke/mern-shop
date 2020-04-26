import { call, takeEvery, all, put } from 'redux-saga/effects'
import getAuthService from '../services/authService';
import { CREATE_USER } from '../reducers/authReducer/types';
import { authRequest, createUserSuccess, createUser } from './syncActions';

export function* createUserRequest() {
  const {sendUserData} = getAuthService()
  
  yield put(authRequest())
  yield call(sendUserData)
  yield put(createUserSuccess())
}

export function* watchCreateUserRequest() {
  yield takeEvery(CREATE_USER, createUser)
}

export default function* rootSaga() {
  yield all([
    watchCreateUserRequest()
  ])
}