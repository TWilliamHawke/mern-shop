import React, { FC } from 'react';
import { NavLink, } from 'react-router-dom';
import './path-links.scss'
import { useCategories } from 'src/hooks/useCategories';

type PropType = {
  action?: string
  itemTitle?: string
}


const PathLinks: FC<PropType> = ({action, itemTitle}) => {
  const {params, catName} = useCategories()
  const {name, item} = params

  return (
    <div className='path-links'>
      <NavLink to='/' >Main</NavLink>
      {name && (<>
        <span> &gt; </span>
        <NavLink to={{pathname:`/catalog/${name}/`, state: catName}} >{catName}</NavLink>
      </>)}
      {itemTitle && (<>
        <span> &gt; </span>
        <NavLink to={{pathname:`/catalog/${name}/${item}/`, state: catName}} >{itemTitle}</NavLink>
      </>)}
      {action && <span> &gt; {action}</span>}
    </div>
  );
};

export default PathLinks;