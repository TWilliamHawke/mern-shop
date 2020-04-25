import React from 'react';
import './navbar.scss'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/cart'>Cart</NavLink></li>
        <li><NavLink to='/login'>Log in</NavLink></li>
        <li><NavLink to='/signin'>Sign in</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;