import React from 'react';
import Layout from './Components/Layout'
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes';
import PublicRoute from './Components/AuthRoutes/PubicRoutes';

import Home from './Components/Home';
import Signin from './Components/Signin';

import Dashboard from './Components/Admin/Dashboard';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} exact path="/dashboard" component={ Dashboard }  />
        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={ Signin }/>
        <PublicRoute {...props} restricted={false} path="/" exact component={ Home }/>
      </Switch>
    </Layout>
  )
}

export default Routes;