import { all } from 'redux-saga/effects'
import authSaga from './authSaga/sagas'
import templateConfigSaga from './templateConfigSaga/sagas'
import itemSaga from './itemSaga/sagas'

export default function* rootSaga() {
  yield all([
    authSaga(),
    templateConfigSaga(),
    itemSaga()
  ])
}