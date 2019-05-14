import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as s from './style';
import imageButton from './images/button_menu.png';

class Navbar extends Component{
  
  constructor(props)
  {
    super(props);
    this.state={dispay:0};
    }
  handleclick = () =>{
    this.state.dispay===0?this.setState({dispay:1}):this.setState({dispay:0});
  }
  componentDidMount(){
    
    this.props.renderCurencyExchange();
  }
  render(){
    
  return (
    <BrowserRouter>
      <s.Wrapper>
        <s.List visibly={this.state.dispay}>
        {this.props.itemsHeader.itemsMenu.map(item => <s.Item key={item.id} ><s.Linki to={item.path} exact activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}>{item.name}</s.Linki></s.Item>)}
          <s.Item>EURO {this.props.itemsHeader.exchangeRates.soldEuro}/{this.props.itemsHeader.exchangeRates.buyEuro}</s.Item>
          <s.Item>USD {this.props.itemsHeader.exchangeRates.soldUsd}/{this.props.itemsHeader.exchangeRates.buyUsd}</s.Item>
          <s.Item>RUB {this.props.itemsHeader.exchangeRates.soldRub}/{this.props.itemsHeader.exchangeRates.buyRub}</s.Item>
          </s.List>
          
          <s.BtnMenu onClick = {this.handleclick}><img src={imageButton} /></s.BtnMenu>
      </s.Wrapper>
    </BrowserRouter>
  );
  }
};

export default Navbar;
