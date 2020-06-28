import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ProtectedRoute from 'src/components/ProtectedRoute'
import MainPage from 'src/pages/MainPage'
import CartPage from 'src/pages/CartPage'
import useUserType from 'src/hooks/useUserType'
import Category from 'src/pages/Category/Category'
import AddItem from 'src/pages/AddItem'
import EditCategory from 'src/pages/EditCategory/EditCategory'
import Spinner from 'src/components/Spinner'
import ItemPage from 'src/pages/ItemPage'
import OrderPage from 'src/pages/OrderPage'
import { useUserTypeChecker } from 'src/hooks/useUserTypeChecker'
import { AuthPage } from 'src/pages/AuthPage/AuthPage'


export const Routes: FC = () => {
  const {isGuest, isUser, isAdmin} = useUserType()
  
  const userType = useUserTypeChecker()

  if(!userType) return <Spinner />

  return (
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <ProtectedRoute access={isGuest} path='/login' component={AuthPage} data={{header: 'Login'}} />
      <ProtectedRoute access={isGuest} path='/signin' component={AuthPage} data={{header: 'SignIn'}} />
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
