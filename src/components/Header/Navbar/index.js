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
    this.state={dispay:0, soldEuro:'0',buyEuro:'0',soldUsd:'0',buyUsd:'0',solRub:'0',buyRub:'0'};
    }
  handleclick = () =>{
    this.state.dispay===0?this.setState({dispay:1}):this.setState({dispay:0});
  }
  componentDidMount(){
    fetch('https://developerhub.alfabank.by:8273/partner/1.0.0/public/rates')
    .then(response=>{
      console.log(response.status);
      return response.json();})
    .then(data=>{
      this.setState({
        soldEuro:data.rates[0].sellRate,
        buyEuro:data.rates[0].buyRate,
        soldUsd:data.rates[4].sellRate,
        buyUsd:data.rates[4].buyRate,
        soldRub:data.rates[3].sellRate,
        buyRub:data.rates[3].buyRate,
      })
    console.log(data);
    }
      ).catch((error)=>{console.log(error);});

  }
  render(){
  return (
    <BrowserRouter>
      <s.Wrapper>
        <s.List visibly={this.state.dispay}>
          {menuItems}
          <s.Item>EURO {this.state.soldEuro}/{this.state.buyEuro}</s.Item>
          <s.Item>USD {this.state.soldUsd}/{this.state.buyUsd}</s.Item>
          <s.Item>RUB {this.state.soldRub}/{this.state.buyRub}</s.Item>
          </s.List>
          
          <s.BtnMenu onClick = {this.handleclick}><img src={imageButton} /></s.BtnMenu>
      </s.Wrapper>
    </BrowserRouter>
  );
  }
};

export default Navbar;
