import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Wrapper from './style';
import AuthItem from './AuthItem';

const Header = () => (
  <Wrapper>
    <Logo />
    <Navbar />
    {typeof (localStorage.getItem('auth')) !== 'undefined' && localStorage.getItem('auth') === 'true'
  && <AuthItem />
  }
  </Wrapper>
);
export default Header;
