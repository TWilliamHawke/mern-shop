import React from 'react';
import { NavLink } from 'react-router-dom';
import './path-links.scss'

const PathLinks = ({path = []}) => {
  return (
    <div className='path-links'>
      <NavLink to='/' >Main</NavLink>
      {path.map(({link, title}) => <span key={link} > > <NavLink to={link}>{title}</NavLink></span>)}
    </div>
  );
};

export default PathLinks;