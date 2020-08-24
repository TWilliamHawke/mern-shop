import { put, call, takeEvery, ForkEffect } from 'redux-saga/effects'
import { transformErrors } from 'src/utils/actionHelpers'
import { getTokenSaga } from './getTokenSaga'
//actions
import { fetchDataRequest, fetchDataFailure, fetchDataSuccess } from '../globalReducer/actions'
import { AnyAction } from 'redux'
import { SagaIterator } from 'redux-saga'

// eslint-disable-next-line
export type Service<T, U> = (data: T) => Promise<U>
export type TokenFetchApi<T, U> = (token: string, data: T) => Promise<U>

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

export const takeFetchSaga = <T, U>(
  actionType:string,
  actionCreator: (a: U) => AnyAction,
  service:TokenFetchApi<T, U>
  ): ForkEffect<never> => {
  return takeEvery(actionType, fetchSaga(actionCreator, service))
}

export const takeFetchForAllSaga = <T, U>(
  actionType:string,
  actionCreator:(payload: U) => AnyAction,
  service:Service<T, U>
  ): ForkEffect<never> => {
  return takeEvery(actionType, fetchForAllSaga(actionCreator, service))
}


// export default function* (): Generator {
//   yield all([
//     takeFetchSaga(SAVE_TEMPLATE, saveTemplateSuccess, api.template.saveTemplate),
//     takeFetchSaga(LOAD_TEMPLATE, loadTemplateSuccess, api.item.fetchTemplate),
//     takeFetchSaga(EDIT_FIELD, clearTemplateData, api.template.editTemplate),
//     takeFetchSaga(ADD_FIELD, clearTemplateData, api.template.addField),
//     takeFetchSaga(GET_FIELDS, getFieldsSuccess, api.template.getFields),
//     //editItem
//     takeFetchSaga(LOAD_IMAGE, loadImageSuccess, api.item.fetchImg),
//     takeFetchSaga(ADD_ITEM, addItemSuccess, api.item.addItem),
//     takeFetchSaga(EDIT_ITEM, addItemSuccess, api.item.editItem),
//     category
//     takeFetchForAllSaga(GET_CATEGORY, loadCategorySuccess, api.item.fetchCategory),
//     takeFetchForAllSaga(GET_ITEM, loadItemSuccess, api.item.fetchItem),
//     takeFetchForAllSaga(GET_FILTERS, fetchFiltersSuccess, api.item.fetchFilters),
//     cart
//     takeFetchSaga(ADD_TO_CART, fetchCartSuccess, api.orders.addToCart),
//     takeFetchSaga(GET_CART, fetchCartSuccess, api.orders.fetchCart),
//     takeFetchSaga(REMOVE_ONE, fetchCartSuccess, api.orders.removeOne),
//     takeFetchSaga(REMOVE_ALL, fetchCartSuccess, api.orders.removeAll),
//     orders
//     takeFetchSaga(MAKE_ORDER, madeOrderSuccess, api.orders.makeOrder),
//     takeFetchSaga(GET_MY_ORDERS, fetchOrdersSuccess, api.orders.fetchMyOrders),
//     takeFetchSaga(GET_ALL_ORDERS, fetchOrdersSuccess, api.orders.fetchAllOrders),
//     takeFetchSaga(CANCEL_ORDER, fetchOrdersSuccess, api.orders.cancelOrder),
//     main page items
//     takeFetchSaga(ADD_POPULAR, loadItemSuccess, api.item.addPopular),
//     takeFetchSaga(REMOVE_POPULAR, loadItemSuccess, api.item.removePoupular),
//     takeFetchForAllSaga(GET_POPULAR, fetchPopularSuccess, api.item.getPopular),
//   ])
// }