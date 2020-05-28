import React from 'react';
import './navbar.scss'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import useUserType from '../../hooks/useUserType';
import { logout } from '../../redux/authSaga/actions'

export const Navbar = ({userType, logout, cart}) => {

  const {isGuest, isUser, isAuthorise} = useUserType(userType)

  const links = [
    {link: '/cart', text: cart?.length ? `Cart(${cart.length})` : 'Cart', show: isUser},
    {link: '/login', text: 'Log in', show: isGuest},
    {link: '/signin', text: 'Sign in', show: isGuest}
  ]

  return (
    <div className="navbar">
      <ul>
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