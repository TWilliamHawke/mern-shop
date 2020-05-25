import {put, call, all, takeEvery} from 'redux-saga/effects'
import { transformErrors } from '../../utils/actionHelpers'
import { getTokenSaga } from '../authSaga/sagas'
import { LOAD_IMAGE, SAVE_TEMPLATE, LOAD_TEMPLATE, EDIT_FIELD, ADD_FIELD, GET_FIELDS, ADD_ITEM, GET_CATEGORY, GET_ITEM } from './types'
//services
import itemService from '../../services/itemService'
import templateSevice from '../../services/editTemplateService'
//actions
import { fetchDataRequest, fetchDataFailure, fetchDataSuccess } from '../globalReducer/actions'
import { saveTemplateSuccess, loadImageSuccess, loadTemplateSuccess, getFieldsSuccess, clearTemplateData, addItemSuccess } from '../templateReducer/actions'
import { loadCategorySuccess, loadItemSuccess } from '../itemReducer/actions'

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

export const fetchForAllSaga = (action, service) => {
  return function* ({payload}) {
    try {
      //set global loading to true
      yield put(fetchDataRequest())
      //fetch data from server
      const { data } = yield call(service, payload)
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

const takeFetchForAllSaga = (actionType, actionCreator, service) => {
  return takeEvery(actionType, fetchForAllSaga(actionCreator, service))
}


export default function* () {
  yield all([
    takeFetchSaga(LOAD_IMAGE, loadImageSuccess, itemService.fetchImg),
    takeFetchSaga(SAVE_TEMPLATE, saveTemplateSuccess, templateSevice.saveTemplate),
    takeFetchSaga(LOAD_TEMPLATE, loadTemplateSuccess, itemService.fetchTemplate),
    takeFetchSaga(EDIT_FIELD, clearTemplateData, templateSevice.editTemplate),
    takeFetchSaga(ADD_FIELD, clearTemplateData, templateSevice.addField),
    takeFetchSaga(GET_FIELDS, getFieldsSuccess, templateSevice.getFields),
    takeFetchSaga(ADD_ITEM, addItemSuccess, itemService.addItem),
    takeFetchForAllSaga(GET_CATEGORY, loadCategorySuccess, itemService.fetchCategory),
    takeFetchForAllSaga(GET_ITEM, loadItemSuccess, itemService.fetchItem)
  ])
}