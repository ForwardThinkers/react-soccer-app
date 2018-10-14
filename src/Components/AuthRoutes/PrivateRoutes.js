import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({
  user,
  component: Dashboard,
  ...remainingProps
}) => {
  return <Route {...remainingProps} component={ props => (
    user ? <Dashboard {...props} user={user}/> : <Redirect to="/sign_in"/>
  )}/>
};

export default PrivateRoutes;