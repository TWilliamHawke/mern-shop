import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import useUserType from '../../hooks/useUserType';
import { useNavbarData } from './useNavbarData';

import './navbar.scss'

export const Navbar: FC = () => {
  const {logout, cartSize} = useNavbarData()
  const {isGuest, isUser, isAuthorise, isAdmin} = useUserType()

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

export default Navbar;