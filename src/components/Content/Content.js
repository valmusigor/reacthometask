import React, {Component} from 'react';
import styled from 'styled-components';
import Signin from './Signin/Signin';
const All=styled.div`
    grid-area:main;
	display:flex;
	flex-wrap:wrap;
	justify-content:space-around;
	
`;
class Content extends Component{
    render(){
        return(
            <All>
                <Signin name='signin'/>
                <Signin name='signup'/>
            </All>
            
        );
    }
}
export default Content;