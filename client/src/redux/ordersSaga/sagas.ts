import { all } from "redux-saga/effects";
import { takeFetchSaga } from "../dataFetchSaga/sagas";
import { api } from 'src/api'
import { MAKE_ORDER, GET_ALL_ORDERS, GET_MY_ORDERS, CANCEL_ORDER, ADD_TO_CART, GET_CART, REMOVE_ONE, REMOVE_ALL } from "./types";
import { madeOrderSuccess, fetchOrdersSuccess, fetchCartSuccess } from '../ordersReducer/actions'


export default function*(): Generator {
  yield all([
    //orders
    takeFetchSaga(MAKE_ORDER, madeOrderSuccess, api.orders.makeOrder),
    takeFetchSaga(GET_MY_ORDERS, fetchOrdersSuccess, api.orders.fetchMyOrders),
    takeFetchSaga(GET_ALL_ORDERS, fetchOrdersSuccess, api.orders.fetchAllOrders),
    takeFetchSaga(CANCEL_ORDER, fetchOrdersSuccess, api.orders.cancelOrder),
    //cart
    takeFetchSaga(ADD_TO_CART, fetchCartSuccess, api.orders.addToCart),
    takeFetchSaga(GET_CART, fetchCartSuccess, api.orders.fetchCart),
    takeFetchSaga(REMOVE_ONE, fetchCartSuccess, api.orders.removeOne),
    takeFetchSaga(REMOVE_ALL, fetchCartSuccess, api.orders.removeAll),

  ])
}