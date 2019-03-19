import React from 'react';
import * as s from './style';

const Navbar = () => (
  <s.Wrapper>
    <ul>
      <s.Item><s.Link href="/">Главная</s.Link></s.Item>
      <s.Item><s.Link href="#">Новости</s.Link></s.Item>
      <s.Item><s.Link href="/friends">Лучшие друзья</s.Link></s.Item>
      <s.Item><s.Link href="#">Контакты</s.Link></s.Item>
    </ul>
  </s.Wrapper>
);

export default Navbar;
