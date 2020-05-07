import {createStore, combineReducers, applyMiddleware} from 'redux'
import authReducer from './authReducer'
import createSagas from 'redux-saga'
import rootSaga from './rootSaga'
import {composeWithDevTools} from 'redux-devtools-extension'
import templateReducer from './templateReducer/templateReducer'
import itemReducer from './itemReducer/reducer'


const reducer = combineReducers({
  item: itemReducer,
  template: templateReducer,
  auth: authReducer
})

const sagasMiddleware = createSagas()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagasMiddleware)))
sagasMiddleware.run(rootSaga)

export default store