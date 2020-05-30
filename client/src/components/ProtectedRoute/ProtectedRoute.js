import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({access, component:Component, data={}, ...rest}) => {

  return (
    <Route {...rest} render={props => access ?
      <Component {...data} {...props} /> : 
      <Redirect to='/' />} />
  );
};

export default ProtectedRoute;