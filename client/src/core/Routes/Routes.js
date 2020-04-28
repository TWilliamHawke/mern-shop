import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ProtectedRoute from 'src/components/ProtectedRoute'
import MainPage from 'src/pages/MainPage'
import LoginPage from 'src/pages/LoginPage'
import SignInPage from 'src/pages/SignInPage'
import CartPage from 'src/pages/CartPage'
import useUserType from '../../hooks/useUserType'

export const Routes = ({userType}) => {
  const {isGuest, isUser} = useUserType(userType)
  
  return (
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <ProtectedRoute access={isGuest} path='/login' component={LoginPage} />
      <ProtectedRoute access={isGuest} path='/signin' component={SignInPage} />
      <ProtectedRoute access={isUser} path='/cart' component = {CartPage} />
    </Switch>
  )
}

const mapStatetoProps = ({auth: {userType}}) => ({
  userType
})

export default connect(mapStatetoProps)(Routes)