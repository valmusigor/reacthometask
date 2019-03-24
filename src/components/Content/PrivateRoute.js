import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...others }) => (
  <Route
    {...others}
    render={props => (localStorage.getItem('auth') === 'true') ? (<Component />) : (
      <Redirect to={{
        pathname: '/login', state: { from: props.location }
      }}
      />
    )}
  />
);

export default PrivateRoute;
