import { all } from 'redux-saga/effects'
import authSaga from './authSaga/sagas'
import ordersSaga from './ordersSaga/sagas'
import itemSaga from './itemSaga/sagas'
import templateSaga from './templateSaga/sagas'

export default function* rootSaga(): Generator {
  yield all([
    authSaga(),
    ordersSaga(),
    itemSaga(),
    templateSaga()
  ])
}