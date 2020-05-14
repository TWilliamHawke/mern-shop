import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagas from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'

import authReducer from './authReducer'
import templateReducer from './templateReducer/templateReducer'
//import itemReducer from './itemReducer/reducer'
import globalReducer from './globalReducer/globalReducer'
import rootSaga from './rootSaga'


const reducer = combineReducers({
  //item: itemReducer,
  template: templateReducer,
  auth: authReducer,
  global: globalReducer
})

const sagasMiddleware = createSagas()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagasMiddleware)))
sagasMiddleware.run(rootSaga)

export default store