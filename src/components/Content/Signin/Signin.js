import React, {Component} from 'react';
import styled from 'styled-components';
import Form from './Form/Form';
const Head=styled.h2`
text-align:center;
`;
const Section=styled.section`
background:rgba(19,101,159,0.5);
	border-radius:3px;
	box-shadow: -5px 8px 24px 12px #6f42c1;
`;
class Signin extends Component{
    render(){
        return(
            <Section>
                <Head>{(this.props.name=='signin')?'Sign in':'Sign up'}</Head>
                <Form name={(this.props.name=='signin')?'signin':'signup'}/>
            </Section>
            
        );
    }
}
export default Signin;