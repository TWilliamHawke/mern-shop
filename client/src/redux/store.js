import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagas from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'

import authReducer from './authReducer'
import templateReducer from './templateReducer/templateReducer'
import itemReducer from './itemReducer/itemReducer'
import globalReducer from './globalReducer/globalReducer'
import rootSaga from './rootSaga'
import ordersReducer from './ordersReducer/ordersReducer'


const reducer = combineReducers({
  items: itemReducer,
  template: templateReducer,
  auth: authReducer,
  global: globalReducer,
  orders: ordersReducer
})

const sagasMiddleware = createSagas()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagasMiddleware)))
sagasMiddleware.run(rootSaga)

export default store