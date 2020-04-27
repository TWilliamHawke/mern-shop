import { call, takeEvery, all, put } from 'redux-saga/effects'
import getAuthService from '../services/authService';
import { CREATE_USER } from '../reducers/authReducer/types';
import { authRequest, createUserSuccess, authFailure } from './syncActions';


export function* createUserRequest({payload}) {
  const {sendUserData} = getAuthService()
  yield put(authRequest())
  try {
    const tokens = yield call(sendUserData, payload)
    yield console.log(tokens);
    
    yield put(createUserSuccess())

  } catch(e) {
    yield put(authFailure(e.response.data))
  }
}

export function* watchCreateUserRequest() {
  yield takeEvery(CREATE_USER, createUserRequest)
}

export default function* rootSaga() {
  yield all([
    watchCreateUserRequest()
  ])
}