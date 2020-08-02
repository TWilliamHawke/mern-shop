import React, { FC, ComponentType } from 'react';
import { Route, Redirect } from 'react-router-dom';

type PropType = {
  access: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>
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