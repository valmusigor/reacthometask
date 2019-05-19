import React from 'react';
import Logo from './Logo';
import NavbarContainer from './Navbar/NavbarContainer';
import Wrapper from './style';
import AuthItem from './AuthItem';

const Header = () => (
  <Wrapper>
    <Logo />
    <NavbarContainer />
  </Wrapper>
);
export default Header;
