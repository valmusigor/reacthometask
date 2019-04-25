import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Wrapper from './style';
import AuthItem from './AuthItem';

const Header = (props) => {
  const data = props;
  return (
    <Wrapper>
      <Logo />
      <Navbar itemsHeader={data.itemsHeader} />
      {typeof (localStorage.getItem('auth')) !== 'undefined' && localStorage.getItem('auth') === 'true'
  && <AuthItem />
  }
    </Wrapper>
  );
};
export default Header;
