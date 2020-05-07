import {put, call, all, takeEvery} from 'redux-saga/effects'
import {transformErrors} from '../../utils/actionHelpers'
import { fetchDataRequest, fetchDataFailure, fetchDataSuccess } from '../globalReducer/actions'
import { getTokenSaga } from '../authSaga/sagas'
import { LOAD_IMAGE } from './types'
import itemService from '../../services/itemService'
import { loadImageSuccess } from '../itemReducer/actions'

const fetchSaga = (action, service) => {
  return function* ({payload}) {
    try {
      yield put(fetchDataRequest())
      const token = yield call(getTokenSaga)
      const { data } = yield call(service, token, payload)
      yield put(action(data))
      yield put(fetchDataSuccess())
    } catch(e) {
      console.log(e)
      const errorsArray = yield transformErrors(e.responce)
      yield put(fetchDataFailure(errorsArray))
    }
  }
}


export default function* () {
  yield all([
    takeEvery(LOAD_IMAGE, fetchSaga(loadImageSuccess, itemService.fetchImg))
  ])
}