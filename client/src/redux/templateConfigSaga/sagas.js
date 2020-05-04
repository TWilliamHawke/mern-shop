import { takeEvery, all } from 'redux-saga/effects'
import { ADD_FIELD } from './types'

export function* addFieldSaga ({payload}) {
  yield console.log('addField', payload)
}

export function* watchAddFieldSaga () {
  yield takeEvery(ADD_FIELD, addFieldSaga)
}

export default function* templateConfigSaga() {
  yield all([
    watchAddFieldSaga()
  ])
}