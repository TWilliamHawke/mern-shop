import { SagaIterator } from "redux-saga"
import { call, put } from "redux-saga/effects"
import { storage } from "src/utils/localStorage"
import { logout } from "../authSaga/actions"
import { api } from "src/api"
import { UsertypeType } from "src/types/authDataTypes"

export function* refreshTokenSaga(userType: UsertypeType, refToken: string): SagaIterator {
  const {data} = yield call(api.auth.refresh, {userType, refToken})
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

