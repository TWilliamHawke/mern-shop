import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ProtectedRoute from 'src/components/ProtectedRoute'
import MainPage from 'src/pages/MainPage'
import LoginPage from 'src/pages/LoginPage'
import SignInPage from 'src/pages/SignInPage'
import CartPage from 'src/pages/CartPage'
import useUserType from '../../hooks/useUserType'
import { checkUserType } from '../../redux/authSaga/actions'

export const Routes = ({userType, checkUserType}) => {
  const {isGuest, isUser} = useUserType(userType)
  
  useEffect(() => {
    checkUserType()
  }, [checkUserType])

  if(!userType) return <p>...Loading...</p>

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

const mapDispathtoProps = {
  checkUserType
}

export default connect(mapStatetoProps, mapDispathtoProps)(Routes)