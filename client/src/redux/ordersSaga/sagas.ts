import { all } from "redux-saga/effects";
import { takeFetchSaga } from "../dataFetchSaga/sagas";
import { api } from 'src/api'
import * as types from "./types";
import { madeOrderSuccess, fetchOrdersSuccess, fetchCartSuccess } from '../ordersReducer/actions'


export default function*(): Generator {
  yield all([
    //orders
    takeFetchSaga(types.MAKE_ORDER, madeOrderSuccess, api.orders.makeOrder),
    takeFetchSaga(types.GET_MY_ORDERS, fetchOrdersSuccess, api.orders.fetchMyOrders),
    takeFetchSaga(types.GET_ALL_ORDERS, fetchOrdersSuccess, api.orders.fetchAllOrders),
    takeFetchSaga(types.CANCEL_ORDER, fetchOrdersSuccess, api.orders.cancelOrder),
    //carttypes.
    takeFetchSaga(types.ADD_TO_CART, fetchCartSuccess, api.orders.addToCart),
    takeFetchSaga(types.GET_CART, fetchCartSuccess, api.orders.fetchCart),
    takeFetchSaga(types.REMOVE_ONE, fetchCartSuccess, api.orders.removeOne),
    takeFetchSaga(types.REMOVE_ALL, fetchCartSuccess, api.orders.removeAll),

  ])
}