import React from 'react';
import Sign from './Sign';
import Wrapper from './style';

const Menu = props => (
  <Wrapper>
    <Sign name="signin" stateSign={props.stateSign.signIn} formWorker={props.formWorker} />
    <Sign name="signup" stateSign={props.stateSign.signUp} formWorker={props.formWorker}/>
  </Wrapper>
);
export default Menu;
