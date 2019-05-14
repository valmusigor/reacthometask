import React from 'react';
import * as s from './style';
import Form from './Form';

const Sign = props => (
  <s.Section>
    <s.Head>{(props.name.label === 'signin') ? 'Sign in' : 'Sign up'}</s.Head>
    <Form
      name={(props.name.label === 'signin') ? 'signin' : 'signup'}
      stateSign={props.stateSign}
      clickAuth={props.clickAuth}
      inputLogin={props.inputLogin}
      inputPass={props.inputPass}
      inputPassRep={props.inputPassRep}
    />
  </s.Section>
);
export default Sign;
