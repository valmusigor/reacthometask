import React from 'react';
import Sign from './Sign';
import Wrapper from './style';

const Menu = () => (
    <Wrapper>
        <Sign name="signin"/>
        <Sign name="signup"/>
    </Wrapper>
);
export default Menu;