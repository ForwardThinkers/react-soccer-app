import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PubicRoutes = ({
  user,
  component: Component,
  ...remainingProps
}) => {
  return <Route {...remainingProps} component={ props => (
    remainingProps.restricted ? 
    (user ? <Redirect to="/dashboard"/> : <Component {...props} user={user} />) :
    <Component {...props} user={user} /> 
  )}/>
};

export default PubicRoutes;