import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Wrapper, SidebarR, SidebarL,
} from './style';
import CabinetRent from './CabinetRent';
import CabinetMenu from './CabinetMenu';
import CabinetUserContainer from './CabinetUser/CabinetUserContainer';
import UserEditContainer from './CabinetUser/UserEdit/UserEditContainer';
import UserEdit from './CabinetUser/UserEdit';

const Cabinet = () => (
  <BrowserRouter>
    <Wrapper>
      <SidebarL>
        <Switch>
          <Route path="/cabinet/rent" render={() => <CabinetRent />} />
          <Route path="/cabinet/user/edit" render={() => <UserEditContainer />} />
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
