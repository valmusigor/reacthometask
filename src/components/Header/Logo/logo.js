import React, {Component} from 'react';
import styled from 'styled-components';
import logoimage from './images/logo.png';
const Wrapper=styled.div`
    display:inline-block;
    padding:10px;
`;
const Images=styled.img`
    width:50px;
    height:50px;
`;
class Logo extends Component{
    render(){
        return(
            <Wrapper>
                <Images src={logoimage}/>
            </Wrapper>
        );
    }
}
export default Logo;