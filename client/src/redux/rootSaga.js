import { all } from 'redux-saga/effects'
import authSaga from './authSaga/sagas'
import dataFetchSaga from './dataFetchSaga/sagas'

export default function* rootSaga() {
  yield all([
    authSaga(),
    dataFetchSaga()
  ])
}