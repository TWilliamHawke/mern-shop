import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import ProtectedRoute from 'src/components/ProtectedRoute'
import MainPage from 'src/pages/MainPage'
import LoginPage from 'src/pages/LoginPage'
import SignInPage from 'src/pages/SignInPage'
import CartPage from 'src/pages/CartPage'
import useUserType from '../../hooks/useUserType'
import { checkUserType } from '../../redux/authSaga/actions'
import Category from '../../pages/Category/Category'
import AddItem from '../../pages/AddItem'
import EditCategory from '../../pages/EditCategory/EditCategory'
import Spinner from '../../components/Spinner'
import ItemPage from '../../pages/ItemPage'
import OrderPage from '../../pages/OrderPage'

export const Routes = ({userType, checkUserType}) => {
  const {isGuest, isUser, isAdmin} = useUserType(userType)
  
  useEffect(() => {
    checkUserType()
  }, [checkUserType])

  if(!userType) return <Spinner />

  return (
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <ProtectedRoute access={isGuest} path='/login' component={LoginPage} />
      <ProtectedRoute access={isGuest} path='/signin' component={SignInPage} />
      <ProtectedRoute access={isUser} path='/cart' component = {CartPage} />
      <ProtectedRoute access={isUser} path='/myorders' component={OrderPage} />
      <ProtectedRoute access={isAdmin} path='/orders'component={OrderPage} data={{all: true}} />
      <ProtectedRoute access={isAdmin} path='/catalog/:name/addItem/edit' component={EditCategory} />
      <ProtectedRoute access={isAdmin} path='/catalog/:name/addItem/' component={AddItem} />
      <ProtectedRoute access={isAdmin} path='/catalog/:name/:item/edit' component={AddItem} />
      <Route exact path='/catalog/:name/' render={() => <Category />} />
      <Route path='/catalog/:name/:item/' component={ItemPage} />
      <Redirect to='/' />
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