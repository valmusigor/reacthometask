import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Wrapper, SidebarR, SidebarL,
} from './style';
import CabinetRent from './CabinetRent';
import CabinetMenu from './CabinetMenu';
import CabinetUserContainer from './CabinetUser/CabinetUserContainer';

const Cabinet = () => (
  <BrowserRouter>
    <Wrapper>
      <SidebarL>
        <Switch>
          <Route path="/cabinet/rent" render={() => <CabinetRent />} />
          <Route path="/cabinet/user" render={() => <CabinetUserContainer />} />
        </Switch>
      </SidebarL>
      <SidebarR>
        <CabinetMenu />
      </SidebarR>
    </Wrapper>
  </BrowserRouter>
);

export default Cabinet;
