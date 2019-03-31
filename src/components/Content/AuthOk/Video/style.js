import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
max-width:100%;
display:flex;
`;
const Player = styled.div`
max-width:60%;
text-align:center;
flex-grow:1;
`;
const List = styled.div`
max-width:40%;
`;
const Item = styled.div`
display:flex;
color:black;
background:white;
`;

export { Wrapper, Player, List, Item };
