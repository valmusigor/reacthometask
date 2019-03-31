import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as s from './style';
import imageButton from './images/button_menu.png';
const items = [
  { path: '/', name: 'Главная' },
  { path: '#', name: 'Новости' },
  { path: '/friends', name: 'Лучшие друзья' },
  { path: '#', name: 'Контакты' },
];
const menuItems = items.map(item => <s.Item><s.Linki to={item.path} exact>{item.name}</s.Linki></s.Item>);

class Navbar extends Component{
  
  constructor(props)
  {
    super(props);
    this.state={dispay:0};
    }
  handleclick = () =>{
    this.state.dispay===0?this.setState({dispay:1}):this.setState({dispay:0});
  }
  render(){
  return (
    <BrowserRouter>
      <s.Wrapper>
        <s.List visibly={this.state.dispay}>
          {menuItems}
          </s.List>
          <s.BtnMenu onClick = {this.handleclick}><img src={imageButton} /></s.BtnMenu>
      </s.Wrapper>
    </BrowserRouter>
  );
  }
};

export default Navbar;
