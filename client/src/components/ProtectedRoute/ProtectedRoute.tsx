import React, { FC, ComponentType } from 'react';
import { Route, Redirect } from 'react-router-dom';

type PropType = {
  access: boolean
  component: ComponentType<Record<string, unknown>>
  data: Record<string, unknown>
}

const ProtectedRoute: FC<PropType> = ({access, component: Component, data={}, ...rest}) => {

  return (
    <Route {...rest} render={props => access ?
      <Component {...data} {...props} /> : 
      <Redirect to='/' />} />
  );
};

export default ProtectedRoute;