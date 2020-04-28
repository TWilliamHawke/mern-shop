import {createStore, combineReducers, applyMiddleware} from 'redux'
import authReducer from './authReducer'
import createSagas from 'redux-saga'
import rootSaga from './authSaga/sagas'
import {composeWithDevTools} from 'redux-devtools-extension'


const reducer = combineReducers({
  auth: authReducer
})

const sagasMiddleware = createSagas()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagasMiddleware)))
sagasMiddleware.run(rootSaga)

export default store