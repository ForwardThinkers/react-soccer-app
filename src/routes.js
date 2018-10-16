import React from 'react';
import Layout from './Components/Layout'
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes';
import PublicRoute from './Components/AuthRoutes/PubicRoutes';

import Home from './Components/Home';
import Signin from './Components/Signin';

import Dashboard from './Components/Admin/Dashboard';
import AdminMatches from './Components/Admin/Matches';
import AddEditMatch from './Components/Admin/Matches/AddEditMatch';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} exact path="/dashboard" component={ Dashboard }  />
        <PrivateRoute {...props} exact path="/admin_matches" component={ AdminMatches }  />
        <PrivateRoute {...props} exact path="/admin_matches/edit_match/:id" component={ AddEditMatch }  />
        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={ Signin }/>
        <PublicRoute {...props} restricted={false} path="/" exact component={ Home }/>
      </Switch>
    </Layout>
  )
}

export default Routes;