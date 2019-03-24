import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import AuthOk from './AuthOk';
import Friends from '../Friends';
import PrivateRoute from './PrivateRoute';

const Content = () =>(
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={typeof (localStorage.getItem('auth')) === 'undefined' ? Menu
          : localStorage.getItem('auth') === 'false' ? Menu : AuthOk}
      />
      <Route exact path="/login" component={localStorage.getItem('auth') === 'false' ? Menu : AuthOk} />
      <PrivateRoute exact path="/friends" component={AuthOk} />
    </Switch>
  </BrowserRouter>
);

export default Content;
