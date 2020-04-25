import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ProtectedRoute from './components/ProtectedRoute'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import SignInPage from './pages/SignInPage'
import CartPage from './pages/CartPage'

export const Routes = ({isGuest, isUser}) => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <ProtectedRoute access={isGuest} path='/login' component={LoginPage} />
      <ProtectedRoute access={isGuest} path='/signin' component={SignInPage} />
      <ProtectedRoute access={isUser} path='/cart' component = {CartPage} />
    </Switch>
  )
}

const mapStatetoProps = ({auth: {isGuest, isUser}}) => ({
  isGuest, isUser
})

export default connect(mapStatetoProps)(Routes)