import React, {Component} from 'react';
import {Wrapper, Field, Btn} from './style';
import { withRouter } from 'react-router-dom'

class Form extends Component {
  
  constructor(props){
    super(props);
    this.state = {inputLogin: '',inputPass:''};
    
    localStorage.setItem('auth','no');
    
  }
  handleClick(){
    if(this.state.inputLogin=="admin" && this.state.inputPass=="1234")
    localStorage.setItem('auth','yes');
    else 
    localStorage.setItem('auth','no');
    
  }
  handleLogin(event){
    this.setState({inputLogin:event.target.value})
  }
  handlePass(event){
    this.setState({inputPass:event.target.value})
  }
  render(){
    const inputLogin=this.state.inputLogin;
    const inputPass=this.state.inputPass;
    return(
  <form>
    <Wrapper>
      <label htmlFor="login">login</label>
      <Field type="text" name="login" id="login" placeholder="enter login" value={inputLogin} onChange={this.handleLogin.bind(this)}/>
    </Wrapper>
    <Wrapper>
      <label htmlFor="pass1">password</label>
      <Field type="password" name="pass1" id="pass1" placeholder="enter password" value={this.state.inputPass} onChange={this.handlePass.bind(this)}/>
    </Wrapper>
    {this.props.name == 'signup' && (
    <Wrapper>
      <label htmlFor="pass2">repeat password</label>
      <Field type="password" name="pass2" id="pass2" placeholder="repeat password" />
    </Wrapper>
    )}
    <Wrapper>
      <Btn onClick={this.handleClick.bind(this)}>
        {(this.props.name == 'signin') ? 'Sign in' : 'Sign up'}
      </Btn>
    </Wrapper>
  </form>
    );}
    }
export default Form;
