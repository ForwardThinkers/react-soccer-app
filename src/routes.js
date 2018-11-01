import React from 'react';
import Layout from './Components/Layout'
import { Switch } from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes';
import PublicRoute from './Components/AuthRoutes/PubicRoutes';

import Home from './Components/Home';
import Signin from './Components/Signin';

import Dashboard from './Components/Admin/Dashboard';
import AdminMatches from './Components/Admin/Matches';
import AddEditMatch from './Components/Admin/Matches/AddEditMatch';
import AdminPlayers from './Components/Admin/Players';
import AddEditPlayers from './Components/Admin/Players/AddEditPlayers';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} exact path="/dashboard" component={ Dashboard }  />
        <PrivateRoute {...props} exact path="/admin_players" component={ AdminPlayers }  />
        <PrivateRoute {...props} exact path="/admin_players/add_players" component={ AddEditPlayers }  />
        <PrivateRoute {...props} exact path="/admin_players/add_players/:id" component={ AddEditPlayers }  />
        <PrivateRoute {...props} exact path="/admin_matches" component={ AdminMatches }  />
        <PrivateRoute {...props} exact path="/admin_matches/edit_match" component={ AddEditMatch }  />
        <PrivateRoute {...props} exact path="/admin_matches/edit_match/:id" component={ AddEditMatch }  />
        <PublicRoute  {...props} exact path="/sign_in" restricted={true}  component={ Signin }/>
        <PublicRoute  {...props} exact path="/" restricted={false} component={ Home }/>
      </Switch>
    </Layout>
  )
}

export default Routes;