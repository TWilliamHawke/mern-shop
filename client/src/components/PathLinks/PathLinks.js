import React from 'react';
import { NavLink, } from 'react-router-dom';
import './path-links.scss'
import { useCategories } from 'src/hooks/useCategories';


const PathLinks = ({action, itemTitle}) => {
  const {categories, params} = useCategories()
  const {name, item} = params

  return (
    <div className='path-links'>
      <NavLink to='/' >Main</NavLink>
      {name && (<>
        <span> &gt; </span>
        <NavLink to={{pathname:`/catalog/${name}/`, state: categories[name]}} >{categories[name]}</NavLink>
      </>)}
      {itemTitle && (<>
        <span> &gt; </span>
        <NavLink to={{pathname:`/catalog/${name}/${item}/`, state: categories[name]}} >{itemTitle}</NavLink>
      </>)}
      {action && <span> &gt; {action}</span>}
    </div>
  );
};

export default PathLinks;