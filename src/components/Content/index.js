import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Friends from '../Friends';

const Content = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" render={() => (<Menu />)} />
      <Route exact path="/friends" render={() => (<Friends />)} />
    </Switch>
  </BrowserRouter>
);
export default Content;
