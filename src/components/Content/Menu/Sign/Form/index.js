import React, { Component } from 'react';
import { Wrapper, Field, Btn } from './style';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { inputLogin: '', inputPass: '', statusLogin: 'false' , statusPassword: 'false', disabled: true };
    this.handleLogin = this.handleLogin.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    localStorage.setItem('auth', 'false');
  }

  handleClick() {
   console.log('обработчик');
    if (this.state.inputLogin == 'x-ray-moby@mail.ru' && this.state.inputPass === '1234') {
      localStorage.setItem('auth', 'true');
    
    } else { localStorage.setItem('auth', 'false'); }
  
  }

  handleLogin(event) {
    this.setState({ inputLogin: event.target.value });
    let str = event.target.value.trim();
    let result=str.match(/@/gi);
    console.log('tut');
   if (result === null )
    {
      this.setState({disabled:true});
      this.setState({statusLogin:'false'});
      console.log(`Результат:${result}`);

    }
    else if (result.length >1 ){
      this.setState({disabled:true});
    console.log('2' );
    }
    else if(result.length == 1 && this.state.statusPassword=='true') {
      this.setState({disabled:false});
      console.log('3' );
    }
    else
    {
    this.setState({statusLogin:'true'});
    //console.log(result.length );
    }
  }

  handlePass(event) {
   this.setState({ inputPass: event.target.value });
   let str = event.target.value.trim();
    if (str.length < 4) 
    {
      this.setState({disabled:true});
      this.setState({statusPassword:'false'});
    }
    else if(this.state.statusLogin=='true') {
      this.setState({disabled:false}); 
    }
    else 
    this.setState({statusPassword:'true'});
  }

  render() {
    return (
      <form action="/auth" method="GET">
        <Wrapper>
          <label htmlFor="login">email</label>
          <Field
            type="text"
            name="login"
            id="login"
            placeholder="enter email"
            value={this.state.inputLogin}
            onInput={this.handleLogin}
          />
        </Wrapper>
        <Wrapper>
          <label htmlFor="pass1">password</label>
          <Field
            type="password"
            name="pass1"
            id="pass1"
            placeholder="enter password"
            value={this.state.inputPass}
            onInput={this.handlePass}
          />
        </Wrapper>
        {this.props.name === 'signup' && (
        <Wrapper>
          <label htmlFor="pass2">repeat password</label>
          <Field type="password" name="pass2" id="pass2" placeholder="repeat password" />
        </Wrapper>
        )}
        <Wrapper>
          <Btn {...(this.state.disabled)?{disabled:true}:{}} onClick={this.handleClick}>
            {(this.props.name === 'signin') ? 'Sign in' : 'Sign up'}
          </Btn>
        </Wrapper>
      </form>
    );
  }
}
export default Form;
