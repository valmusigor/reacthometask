import React from 'react';
import { Btn, LinkMenu } from './style';

const CabinetMenu = () => (
  <div>
    <Btn>
      <LinkMenu to="/cabinet/user" exact activeStyle={{ textDecoration: 'none', color: 'black' }}>Учетные данные</LinkMenu>
    </Btn>
    <Btn>
      <LinkMenu to="/cabinet/rent" exact activeStyle={{ textDecoration: 'none', color: 'black' }}>Объявления аренды </LinkMenu>
    </Btn>
  </div>
);

export default CabinetMenu;
