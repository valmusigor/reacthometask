import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Logo/logo';
import Navbar from './Navbar/Navbar';
const Wrapper=styled.div`
grid-area:header;
`;

class Header extends Component{
    render(){
        return(
           <Wrapper>
               <Logo/>
               <Navbar/>
           </Wrapper> 
        );
    }
}
export default Header;