import {createStore, combineReducers, applyMiddleware} from 'redux'
import authReducer from './authReducer'
import createSagas from 'redux-saga'
import rootSaga from '../actions/sagas'

const reducer = combineReducers({
  auth: authReducer
})

const sagasMiddleware = createSagas()

const store = createStore(reducer, applyMiddleware(sagasMiddleware))
sagasMiddleware.run(rootSaga)

export default store