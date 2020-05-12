import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './path-links.scss'
import { connect } from 'react-redux';

const PathLinks = ({path = [], match, categories, action}) => {
  const {name} = match.params

  return (
    <div className='path-links'>
      <NavLink to='/' >Main</NavLink>
      {name && (<>
        <span> > </span>
        <NavLink to={{pathname:`/catalog/${name}/`, state: categories[name]}} >{categories[name]}</NavLink>
      </>)}
      {path.map(({link, title}) => <span key={link} > > <NavLink to={link}>{title}</NavLink></span>)}
      {action && <span> > {action}</span>}
    </div>
  );
};

const mapStateToProps = ({global: {categories}}) => ({
  categories
})

export default connect(mapStateToProps)(withRouter(PathLinks));