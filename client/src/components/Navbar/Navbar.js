import React from 'react';
import './navbar.scss'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import useUserType from '../../hooks/useUserType';
import { logout } from '../../redux/authSaga/actions'

export const Navbar = ({userType, logout, cart}) => {

  const {isGuest, isUser, isAuthorise, isAdmin} = useUserType(userType)

  const cartSize = cart ? cart.reduce((sum, {count}) => sum + count, 0) : 0

  const links = [
    {link: '/cart', text: cartSize ? `Cart(${cartSize})` : 'Cart', show: isUser},
    {link: '/login', text: 'Log in', show: isGuest},
    {link: '/signin', text: 'Sign in', show: isGuest},
    {link: '/myorders', text: 'Orders', show: isUser},
    {link: '/orders', text: 'Orders', show: isAdmin},
  ]

  return (
    <div className="navbar">
      <ul className='container'>
        <li><NavLink exact to='/'>Home</NavLink></li>
        {links.map(({show, link, text}) => {
          if(!show) return null
          return <li key={link}><NavLink to={link}>{text}</NavLink></li>
        })}
        {isAuthorise && (
          <button onClick={logout}>Logout</button>
        )}
      </ul>
    </div>
  );
};

const mapDispathtoProps = {
  logout
}

const mapStatetoProps = ({auth: {userType}, orders: {cart}}) => ({
  userType, cart
})

export default connect(mapStatetoProps, mapDispathtoProps)(Navbar);