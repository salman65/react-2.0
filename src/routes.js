import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import containers for routing
import Home from './containers/Home';
import Farmers from './containers/Farmers';


// configure all the routes here inside a swtich statement and export them as a single component
export const Views = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/farmers" component={Farmers} />
      <Redirect to="/" />
    </Switch>
  )
}
