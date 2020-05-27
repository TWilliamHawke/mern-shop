import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './path-links.scss'
import { connect } from 'react-redux';

const PathLinks = ({match, categories, action, itemTitle}) => {
  const {name, item} = match.params

  return (
    <div className='path-links'>
      <NavLink to='/' >Main</NavLink>
      {name && (<>
        <span> > </span>
        <NavLink to={{pathname:`/catalog/${name}/`, state: categories[name]}} >{categories[name]}</NavLink>
      </>)}
      {itemTitle && (<>
        <span> > </span>
        <NavLink to={{pathname:`/catalog/${name}/${item}/`, state: categories[name]}} >{itemTitle}</NavLink>
      </>)}
      {action && <span> > {action}</span>}
    </div>
  );
};

const mapStateToProps = ({global: {categories}}) => ({
  categories
})

export default connect(mapStateToProps)(withRouter(PathLinks));