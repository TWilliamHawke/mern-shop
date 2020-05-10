import {put, call, all, takeEvery} from 'redux-saga/effects'
import {transformErrors} from '../../utils/actionHelpers'
import { fetchDataRequest, fetchDataFailure, fetchDataSuccess, setSuccessMessage } from '../globalReducer/actions'
import { getTokenSaga } from '../authSaga/sagas'
import { LOAD_IMAGE, SAVE_TEMPLATE, LOAD_TEMPLATE } from './types'
import itemService from '../../services/itemService'
import { loadImageSuccess, loadtemplateSuccess } from '../itemReducer/actions'
import templateSevice from '../../services/editTemplateService'

export const fetchSaga = (action, service) => {
  return function* ({payload}) {
    try {
      //set global loading to true
      yield put(fetchDataRequest())
      const token = yield call(getTokenSaga)
      //fetch data from server
      const { data } = yield call(service, token, payload)
      //send data to reducer
      yield put(action(data))
      //set global loading to false
      yield put(fetchDataSuccess())

    } catch(e) {
      const errorsArray = yield call(transformErrors, e.response)
      yield put(fetchDataFailure(errorsArray))
    }
  }
}

const takeFetchSaga = (actionType, actionCreator, service) => {
  return takeEvery(actionType, fetchSaga(actionCreator, service))
}


export default function* () {
  yield all([
    takeFetchSaga(LOAD_IMAGE, loadImageSuccess, itemService.fetchImg),
    takeFetchSaga(SAVE_TEMPLATE, setSuccessMessage, templateSevice.saveTemplate),
    takeFetchSaga(LOAD_TEMPLATE, loadtemplateSuccess, itemService.fetchTemplate),
  ])
}