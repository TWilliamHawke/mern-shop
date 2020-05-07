import { all, takeEvery, call, put } from 'redux-saga/effects'
import { LOAD_IMAGE } from './types'
import itemService from '../../services/itemService'
import { getTokenSaga } from '../authSaga/sagas'
import { loadImageSuccess, fetchItemFailure, fetchItemRequest } from '../itemReducer/actions'
import { transformErrors } from '../authReducer/utils/transformErrors'


export function* loadImageSaga({payload}) {
  try {
    yield put(fetchItemRequest())
    const token = yield call(getTokenSaga)
    const { data } = yield call(itemService.fetchImg, payload, token)
    yield call(console.log, data)
    yield put(loadImageSuccess(data.img))
  } catch(e) {
    console.log(e)
    const errorsArray = yield transformErrors(e.responce)
    yield(fetchItemFailure(errorsArray))
  }
}


export default function* itemSaga() {
  yield all([
    takeEvery(LOAD_IMAGE, loadImageSaga)
  ])
}