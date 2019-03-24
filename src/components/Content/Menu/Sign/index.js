import React from 'react';
import * as s from './style';
import Form from './Form';

const Sign = props => (
  <s.Section>
    <s.Head>{(props.name === 'signin') ? 'Sign in' : 'Sign up'}</s.Head>
    <Form name={(props.name === 'signin') ? 'signin' : 'signup'} />
  </s.Section>
);
export default Sign;
