import { takeEvery, all, call, put } from 'redux-saga/effects'
import { ADD_FIELD, GET_FIELDS } from './types'
import templateService from '../../services/editTemplateService'
import { getTokenSaga } from '../authSaga/sagas'
import { templateRequest, getFieldsSuccess, templateFailure, addFieldSuccess } from '../templateReducer/actions'
import { transformErrors } from '../authReducer/utils/transformErrors'

export function* addFieldSaga ({payload}) {
  yield put(templateRequest())
  const token = yield call(getTokenSaga)
  yield put(addFieldSuccess())
  yield call (templateService.addField, payload, token)
}

export function* getFieldsSaga() {
  try {
    const token = yield call(getTokenSaga)
    const { data } = yield call(templateService.getFields, token)
    yield put(getFieldsSuccess(data.fields))
  } catch (e) {
    const errorsArray = yield call(transformErrors(e.responce))
    yield put(templateFailure(errorsArray))
  }

}

export function* watchAddFieldSaga () {
  yield takeEvery(ADD_FIELD, addFieldSaga)
}

export default function* templateSaga() {
  yield all([
    watchAddFieldSaga(),
    takeEvery(GET_FIELDS, getFieldsSaga)
  ])
}