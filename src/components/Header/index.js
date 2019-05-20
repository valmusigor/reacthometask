import React from 'react';
import Logo from './Logo';
import NavbarContainer from './Navbar/NavbarContainer';
import Wrapper from './style';

const Header = () => (
  <Wrapper>
    <Logo />
    <NavbarContainer />
  </Wrapper>
);
export default Header;
