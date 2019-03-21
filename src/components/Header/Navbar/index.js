import React from 'react';
import * as s from './style';
import {BrowserRouter} from 'react-router-dom';


const Navbar = () => (
  <BrowserRouter>
    <s.Wrapper>
      <ul>
        <s.Item><s.Linki to="/" exact>Главная</s.Linki></s.Item>
        <s.Item><s.Linki to="#">Новости</s.Linki></s.Item>
        <s.Item><s.Linki to="/friends" exact>Лучшие друзья</s.Linki></s.Item>
        <s.Item><s.Linki to="#">Контакты</s.Linki></s.Item>
      </ul>
    </s.Wrapper>
  </BrowserRouter>
);

export default Navbar;
