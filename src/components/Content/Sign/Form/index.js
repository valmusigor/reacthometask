import React from 'react';
import {Wrapper, Field, Btn} from './style';

const Form = props => (
  <form>
    <Wrapper>
      <label htmlFor="login">login</label>
      <Field type="text" name="login" id="login" placeholder="enter login" />
    </Wrapper>
    <Wrapper>
      <label htmlFor="pass1">password</label>
      <Field type="password" name="pass1" id="pass1" placeholder="enter password" />
    </Wrapper>
    {props.name == 'signup' && (
    <Wrapper>
      <label htmlFor="pass2">repeat password</label>
      <Field type="password" name="pass2" id="pass2" placeholder="repeat password" />
    </Wrapper>
    )}
    <Wrapper>
      <Btn>
        {(props.name == 'signin') ? 'Sign in' : 'Sign up'}
      </Btn>
    </Wrapper>
  </form>
);
export default Form;
