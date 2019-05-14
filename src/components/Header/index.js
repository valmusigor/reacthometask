import React from 'react';
import Logo from './Logo';
import NavbarContainer from './Navbar/NavbarContainer';
import Wrapper from './style';
import AuthItem from './AuthItem';

const Header = () => (
  <Wrapper>
    <Logo />
    <NavbarContainer />
    {typeof (localStorage.getItem('auth')) !== 'undefined' && localStorage.getItem('auth') === 'true'
      && <AuthItem />}
  </Wrapper>
);
export default Header;
