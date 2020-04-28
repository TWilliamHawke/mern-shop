import { call, takeEvery, all, put } from 'redux-saga/effects'
import authService from '../../services/authService';
import { CREATE_USER } from './types';
import { authRequest, createUserSuccess, authFailure } from '../authReducer/actions';


export function* createUserRequest({payload}) {
  //const {sendUserData} = getAuthService()
  yield put(authRequest())
  try {
    const tokens = yield call(authService.sendUserData, payload)
    //yield console.log(tokens);
    
    yield put(createUserSuccess(tokens))

  } catch(e) {
    yield put(authFailure(e.response))
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