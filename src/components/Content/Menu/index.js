import React from 'react';
import Sign from './Sign';
import Wrapper from './style';

const Menu = props => (
  <Wrapper>
    {props.nameItem.map(item => (
      <Sign
        key={item.id}
        name={item}
        stateSign={(item.label === 'signin') ? props.stateSignIn : props.stateSignUp}
        clickAuth={props.clickAuth}
        inputLogin={props.inputLogin}
        inputPass={props.inputPass}
        inputPassRep={props.inputPassRep}
      />
    ))}

  </Wrapper>
);
export default Menu;
