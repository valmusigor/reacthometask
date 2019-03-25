import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as s from './style';

const Navbar = () => {
  const items = [
    { path: '/', name: 'Главная' },
    { path: '#', name: 'Новости' },
    { path: '/friends', name: 'Лучшие друзья' },
    { path: '#', name: 'Контакты' },
  ];
  const menuItems = items.map(item => <s.Item><s.Linki to={item.path} exact>{item.name}</s.Linki></s.Item>);
  return (
    <BrowserRouter>
      <s.Wrapper>
        <ul>
          {menuItems}
        </ul>
      </s.Wrapper>
    </BrowserRouter>
  );
};

export default Navbar;
