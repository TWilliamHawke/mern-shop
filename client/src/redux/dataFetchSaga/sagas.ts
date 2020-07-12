import {put, call, all, takeEvery} from 'redux-saga/effects'
import { transformErrors } from 'src/utils/actionHelpers'
import { getTokenSaga } from '../authSaga/sagas'
import { LOAD_IMAGE, SAVE_TEMPLATE, LOAD_TEMPLATE, EDIT_FIELD, ADD_FIELD, GET_FIELDS, ADD_ITEM, GET_CATEGORY, GET_ITEM, EDIT_ITEM, ADD_TO_CART, GET_CART, REMOVE_ONE, REMOVE_ALL, MAKE_ORDER, GET_MY_ORDERS, GET_ALL_ORDERS, CANCEL_ORDER, GET_FILTERS, ADD_POPULAR, REMOVE_POPULAR, GET_POPULAR } from './types'
//services
import { api } from 'src/api'
//actions
import { fetchDataRequest, fetchDataFailure, fetchDataSuccess, fetchPopularSuccess } from '../globalReducer/actions'
import { saveTemplateSuccess, loadImageSuccess, loadTemplateSuccess, getFieldsSuccess, clearTemplateData, addItemSuccess } from '../templateReducer/actions'
import { loadCategorySuccess, loadItemSuccess, fetchFiltersSuccess } from '../itemReducer/actions'
import { fetchCartSuccess, madeOrderSuccess, fetchOrdersSuccess } from '../ordersReducer/actions'
import { AnyAction } from 'redux'
import { SagaIterator } from 'redux-saga'

// eslint-disable-next-line
export type Service<T, U> = (data: T) => Promise<U>
export type TokenFetchApi<T, U> = (token: string, data: T) => Promise<U>

type SerType<T, U> = Service<T, U> | TokenFetchApi<T, U>

type FetchSagaOverload = {
  <T, U>(action: (payload: U) => AnyAction, service: TokenFetchApi<T, U>): ({payload}: AnyAction) => SagaIterator
  <T, U>(action: (payload: U) => AnyAction, service: Service<T, U>): ({payload}: AnyAction) => SagaIterator
}

// eslint-disable-next-line
export const fetchSaga: FetchSagaOverload = (action:any, service:any) => {
  return function* ({payload}: AnyAction) {
    try {
      //set global loading to true
      yield put(fetchDataRequest())
      const token: string = yield call(getTokenSaga)
      //fetch data from server
      const { data } = yield call(service, token, payload)
      //send data to reducer
      yield put(action(data))
      //set global loading to false
      yield put(fetchDataSuccess())

    } catch(e) {
//      console.log(e)
      const errorsArray = yield call(transformErrors, e.response)
      yield put(fetchDataFailure(errorsArray))
    }
  }
}

export const fetchForAllSaga = <T, U>(action: (payload: U) => AnyAction, service: Service<T, U>) => {
  return function* ({payload}: AnyAction): SagaIterator {
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
//      console.log(e)
      const errorsArray = yield call(transformErrors, e.response)
      yield put(fetchDataFailure(errorsArray))
    }
  }
}

const takeFetchSaga = <T, U>(
  actionType:string,
  actionCreator: (a: U) => AnyAction,
  service:TokenFetchApi<T, U>
  ) => {
  return takeEvery(actionType, fetchSaga(actionCreator, service))
}

const takeFetchForAllSaga = <T, U>(
  actionType:string,
  actionCreator:(payload: U) => AnyAction,
  service:Service<T, U>
  ) => {
  return takeEvery(actionType, fetchForAllSaga(actionCreator, service))
}


export default function* (): Generator {
  yield all([
    takeFetchSaga(SAVE_TEMPLATE, saveTemplateSuccess, api.template.saveTemplate),
    takeFetchSaga(LOAD_TEMPLATE, loadTemplateSuccess, api.item.fetchTemplate),
    takeFetchSaga(EDIT_FIELD, clearTemplateData, api.template.editTemplate),
    takeFetchSaga(ADD_FIELD, clearTemplateData, api.template.addField),
    takeFetchSaga(GET_FIELDS, getFieldsSuccess, api.template.getFields),
    //editItem
    takeFetchSaga(LOAD_IMAGE, loadImageSuccess, api.item.fetchImg),
    takeFetchSaga(ADD_ITEM, addItemSuccess, api.item.addItem),
    takeFetchSaga(EDIT_ITEM, addItemSuccess, api.item.editItem),
    //category
    takeFetchForAllSaga(GET_CATEGORY, loadCategorySuccess, api.item.fetchCategory),
    takeFetchForAllSaga(GET_ITEM, loadItemSuccess, api.item.fetchItem),
    takeFetchForAllSaga(GET_FILTERS, fetchFiltersSuccess, api.item.fetchFilters),
    //cart
    takeFetchSaga(ADD_TO_CART, fetchCartSuccess, api.orders.addToCart),
    takeFetchSaga(GET_CART, fetchCartSuccess, api.orders.fetchCart),
    takeFetchSaga(REMOVE_ONE, fetchCartSuccess, api.orders.removeOne),
    takeFetchSaga(REMOVE_ALL, fetchCartSuccess, api.orders.removeAll),
    //orders
    takeFetchSaga(MAKE_ORDER, madeOrderSuccess, api.orders.makeOrder),
    takeFetchSaga(GET_MY_ORDERS, fetchOrdersSuccess, api.orders.fetchMyOrders),
    takeFetchSaga(GET_ALL_ORDERS, fetchOrdersSuccess, api.orders.fetchAllOrders),
    takeFetchSaga(CANCEL_ORDER, fetchOrdersSuccess, api.orders.cancelOrder),
    //main page items
    takeFetchSaga(ADD_POPULAR, loadItemSuccess, api.item.addPopular),
    takeFetchSaga(REMOVE_POPULAR, loadItemSuccess, api.item.removePoupular),
    takeFetchForAllSaga(GET_POPULAR, fetchPopularSuccess, api.item.getPopular),
  ])
}