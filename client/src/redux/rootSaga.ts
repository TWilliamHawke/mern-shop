import { all } from 'redux-saga/effects'
import authSaga from './authSaga/sagas'
import dataFetchSaga from './dataFetchSaga/sagas'

export default function* rootSaga(): Generator {
  yield all([
    authSaga(),
    dataFetchSaga()
  ])
}