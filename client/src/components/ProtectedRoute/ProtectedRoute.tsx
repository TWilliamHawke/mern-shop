import React, { FC, ComponentType } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router'

type PropType = {
  access: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<RouteChildrenProps> | React.ComponentType<any>
  data?: Record<string, unknown>
  path: string
}

const ProtectedRoute: FC<PropType> = ({access, component: Component, data={}, ...rest}) => {

  return (
    <Route {...rest} render={props => access ?
      <Component {...data} {...props} /> : 
      <Redirect to='/' />} />
  );
};

export default ProtectedRoute;